import * as webpage from "webpage";

import TSDGenerator from "./TSDGenerator";

import "./DocumentResolver";    //compile to js file

let page: any;

let fs = require("fs"); //phantomjs's fs api

page = webpage.create();

fs.makeDirectory("tsd");

page.open( "http://localhost:8080/btVector3.html", (status: string): void => {
    if ( status === "success" ) {
        page.injectJs("./src/DocumentResolver.js")
        let content = page.evaluateJavaScript(`
            function() {
                var resolver = new DocumentResolver();
                return resolver.content;
            }
        `);
        let tsdGenerator = new TSDGenerator(content);
        fs.write(`./tsd/${tsdGenerator.pathname}`, tsdGenerator.contentString, "w");
    }
    phantom.exit();
} )