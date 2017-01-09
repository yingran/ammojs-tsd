import * as webpage from "webpage";

let page: any;

page = webpage.create();

page.open( "http://cn.bing.com/", (status: string): void => {
    if ( status === "success" ) {
        let content = page.evaluate(() => {
            return document.querySelector( "body" ).textContent;
        });
        console.log( content );
    }
    phantom.exit();
} )