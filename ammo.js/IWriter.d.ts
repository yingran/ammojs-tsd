
            declare namespace Ammo { 

                export class IWriter { 

                    constructor(  ); 

                     

                    Prepare( root?: btDbvtNode, numnodes?: number ): void; 
WriteNode( arg1?: btDbvtNode, index?: number, parent?: number, child0?: number, child1?: number ): void; 
WriteLeaf( arg1?: btDbvtNode, index?: number, parent?: number ): void; 
 

                } 

            }
        