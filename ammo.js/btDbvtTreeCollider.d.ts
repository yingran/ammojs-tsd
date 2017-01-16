
            declare namespace Ammo { 

                export class btDbvtTreeCollider { 

                    constructor( p?: btDbvtBroadphase ); 

                    pbp: btDbvtBroadphase; 
proxy: btDbvtProxy; 
 

                    Process( na?: btDbvtNode, nb?: btDbvtNode ): void; 
Process( n?: btDbvtNode ): void; 
Process( arg1?: btDbvtNode, arg2?: btDbvtNode ): any; 
Process( arg1?: btDbvtNode ): any; 
Process( n?: btDbvtNode, btScalar?: any ): any; 
Descent( arg1?: btDbvtNode ): any; 
AllLeaves( arg1?: btDbvtNode ): any; 
 

                } 

            }
        