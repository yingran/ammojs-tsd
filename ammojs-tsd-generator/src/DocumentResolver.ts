//executed within the page content sandbox.

import * as DocumentContent from "./DocumentContent";

class DocumentResolver {

    content: DocumentContent.ClassContent;

    constructor() {
        this.content = {
            name: "",
            constructor: {
                arguments: []
            },
            methods: [],
            attributes: []
        };
        this.generateName();
        this.generateMembers();
    }

    private generateName(): void {
        this.content.name = document.querySelector(".title").textContent.split(" ")[0];
    }

    private generateMembers(): void {
        let tables = document.querySelectorAll("table.memberdecls");
        
        for ( let i=0, len=tables.length; i<len; i++ ) {
            let headline = tables[i].querySelector("h2.groupheader").textContent.replace(/[\n\r]/gi, "").toLowerCase();
            switch(headline) {
                case "public member functions":
                case "protected member functions":
                case "private member functions":
                    this.generateMethods(tables[i], headline.split(" ")[0]);
                    break;
                case "public attributes":
                case "protected attributes":
                case "private attributes":
                    this.generateAttributes(tables[i], headline.split(" ")[0]);
                    break;
                default:
                    break;
            }
        }
    }

    private generateAttributes( table: Element, modifier: string = "public" ) {
        let rows = table.querySelectorAll("tr");
        for ( let i=0, len=rows.length; i<len; i++ ) {
            let attribute: DocumentContent.ClassAttribute = {
                name: "",
                modifier: modifier,
                type: "any"
            }
            let tdLeft = rows[i].querySelector("td.memItemLeft");
            let tdRight = rows[i].querySelector("td.memItemRight");
            if ( tdLeft && tdRight ) {
                attribute.type = this.getType( tdLeft );
                attribute.name = this.getName( tdRight.textContent );
                this.content.attributes.push(attribute);
            }
        }
    }

    private generateMethods( table: Element, modifier: string = "public" ): void {
        let rows = table.querySelectorAll("tr");
        for ( let i=0, len=rows.length; i<len; i++ ) {
            let method: DocumentContent.ClassMethod = {
                name: "",
                modifier: modifier,
                type: "any",
                arguments: []
            }
            let tdLeft = rows[i].querySelector("td.memItemLeft");
            let tdRight = rows[i].querySelector("td.memItemRight");
            if ( tdLeft && tdRight ) {
                let methodText = tdRight.textContent;
                method.type = this.getType( tdLeft );
                method.name = this.getName( methodText );
                method.arguments = this.getArguments(methodText);
                if ( method.name === this.content.name ) {  //constructor
                    this.content.constructor = {
                        arguments: method.arguments
                    };
                } else if ( /^operator[^\w]/.test(method.name) ) {
                    let operator = method.name.replace( /^operator/, "");
                    if ( method.arguments[0] && method.arguments[0].type === "btVector3" ) {
                        switch(operator) {
                            case "+=":
                                method.name = "op_add";
                                break;
                            case "-=":
                                method.name = "op_sub";
                                break;
                            case "*=":
                                method.name = "op_mul";
                                break;
                            case "/=":
                            default:
                                method.name = "";
                                break;
                        }
                    } else {
                        method.name = "";
                    }
                    if ( method.name ) {    
                        this.content.methods.push(method);
                    }
                } else {
                    this.content.methods.push(method);
                }
            }
        }
    }

    private getName( text: string ): string {
        return text.split(" ")[0].replace(/^[^\w]/, "");
    }

    private getArguments( methodText: string ): Array<any> {
        let args : Array<DocumentContent.ClassMethodArgument> = [];
        let argsTexts: Array<string> = methodText.replace(/^[^(]*\(([^)]*)\).*$/gi, "$1").split(/, */);
        argsTexts.forEach((text, index) => {
            if ( !text ) {
                return;
            }
            let texts = text.split(" ");
            let len = texts.length;
            let arg: DocumentContent.ClassMethodArgument = {
                type: (texts[len-2] || "any").replace(/^[^\w]/, ""),
                name: texts[len-1].replace(/^[^\w]*(\w+).*$/, "$1")
            };
            args.push(arg);
        });
        return args;
    }

    private getType( td: Element ): string {
        let textContent = td.textContent;
        let anchor: Element = td.querySelector("a");
        let type: string;
        if ( textContent.indexOf("<") >= 0 ) {
            type = "any";
        } else if ( anchor ) {
            type = anchor.textContent.replace(/^[^\w]/, "");
        } else {
            let texts = td.textContent.replace( /(&nbsp;|\u00A0)$/gi, "" ).split(" ");
            let tmpType = texts[texts.length-1];
            switch (tmpType) {
                case "void":
                    type = tmpType;
                    break;
                case "bool":
                    type = "boolean";
                    break;
                case "int":
                    type = "number";
                    break;
                default:
                    type = "any";
                    break;
            }
        }
        return type;
    }

}