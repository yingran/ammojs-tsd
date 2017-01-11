
export interface ClassMethod {
    name: string;
    modifier: string;
    type: string;
    arguments: Array<ClassMethodArgument>;
}

export interface ClassConstructor {
    arguments: Array<ClassMethodArgument>;
};

export interface ClassMethodArgument {
    type: string,
    name: string
}

export interface ClassAttribute {
    name: string;
    modifier: string;
    type: string;
}

export interface ClassContent {
    name: string;
    constructor: ClassConstructor;
    methods: Array<ClassMethod>;
    attributes: Array<ClassAttribute>;
}