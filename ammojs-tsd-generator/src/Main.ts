import * as webpage from "webpage";

import TSDGenerator from "./TSDGenerator";

import "./DocumentResolver";    //compile to js file

const fs = require("fs"); //phantomjs's fs api

const basePath = 'http://bulletphysics.org/Bullet/BulletFull/';

let page: any;


let classPathnames: Array<string>;
let classTSDNames: Array<string> = [];

page = webpage.create();

fs.makeDirectory("tsd");

page.open( "http://localhost:8080/annotated.html", (status: string): void => {
    if ( status === "success" ) {
        classPathnames = page.evaluate(() => {
            let anchors = document.querySelectorAll("table.directory td.entry a");
            let links: Array<string> = [];
            for ( let i=0, len=anchors.length; i<len; i++ ) {
                let pathname = anchors[i].getAttribute("href");
                if ( /^class/gi.test(pathname) ) {
                    links.push( pathname );
                }
            }
            return links;
        });
        grabDocument();
    }
});

function createIndex() {
    let contentString = "";
    classTSDNames.forEach(( filename: string, index: number ) => {
        contentString += `/// <reference path="${filename}" />\n`;
    });

    contentString += `
        declare namespace Ammo {
        }
        declare module "ammo.js" {
            export = Ammo;
        }
    `;
    fs.write("./tsd/index.d.ts", contentString, "w");

}

function grabDocument() {
    if ( classPathnames.length > 0 ) {
        let link = `${basePath}${classPathnames.shift()}`
        console.log("---------------------------");
        console.log(link);
        page.open( link, (status: string): void => {
            if ( status === "success" ) {
                console.log("ready");
                page.injectJs("./src/DocumentResolver.js")
                let content = page.evaluateJavaScript(`
                    function() {
                        var resolver = new DocumentResolver();
                        return resolver.content;
                    }
                `);
                let tsdGenerator = new TSDGenerator(content);
                classTSDNames.push( tsdGenerator.pathname );
                console.log("start write");
                fs.write(`./tsd/${tsdGenerator.pathname}`, tsdGenerator.contentString, "w");
                console.log("writed");

                grabDocument();
            }
        });
    } else {
        createIndex();
        console.log("--------------end-------------");
        phantom.exit();
    }
}