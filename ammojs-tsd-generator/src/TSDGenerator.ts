import * as DocumentContent from "./DocumentContent";

export default class TSDGenerator {

    private content: DocumentContent.ClassContent;

    public contentString: string;
    public pathname: string;

    constructor ( content: DocumentContent.ClassContent ) {
        this.content = content;
        this.contentString = `
            declare namespace Ammo { \n
                export class ${this.content.name} { \n
                    constructor( ${this.getArgumentsString( this.content.constructor.arguments )} ); \n
                    ${this.getAttributesString()} \n
                    ${this.getMethodsString()} \n
                } \n
            }
        `;
        this.pathname = `${this.content.name}.d.ts`;
    }

    private getAttributesString(): string {
        let methodList: Array<string> = [];
        this.content.attributes.forEach(( attribute:DocumentContent.ClassAttribute, index:number ) => {
            methodList.push(`${attribute.name}: ${attribute.type}; \n`);
        });
        return methodList.join("");
    }

    private getMethodsString(): string {
        let methodList: Array<string> = [];
        this.content.methods.forEach(( method:DocumentContent.ClassMethod, index:number ) => {
            methodList.push(`${method.name}( ${this.getArgumentsString( method.arguments )} ): ${method.type}; \n`);
        });
        return methodList.join("");
    }

    private getArgumentsString( args: Array<DocumentContent.ClassMethodArgument> ): string {
        let argList: Array<string> = [];
        args.forEach(( arg: DocumentContent.ClassMethodArgument ) => {
            argList.push( `${arg.name}: ${arg.type}` );
        });
        return argList.join(", ");
    }


}