import * as webpage from "webpage";
import "./DocumentResolver";

let page: any;

page = webpage.create();

page.open( "http://localhost:8080/btDiscreteDynamicsWorld.html", (status: string): void => {
    if ( status === "success" ) {
        if (page.injectJs("./src/DocumentResolver.js")) {
            let content = page.evaluate(() => {
                let resolver = new DocumentResolver();
                return resolver.content;
            });
            console.log(JSON.stringify(content));
        };
    }
    phantom.exit();
} )