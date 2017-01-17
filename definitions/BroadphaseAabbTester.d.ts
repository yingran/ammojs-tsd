
            declare namespace Ammo { 

                export class BroadphaseAabbTester { 

                    constructor( orgCallback?: btBroadphaseAabbCallback ); 

                    m_aabbCallback: btBroadphaseAabbCallback; 
 

                    Process( leaf?: btDbvtNode ): void; 
Process( arg1?: btDbvtNode, arg2?: btDbvtNode ): any; 
Process( arg1?: btDbvtNode ): any; 
Process( n?: btDbvtNode, btScalar?: any ): any; 
Descent( arg1?: btDbvtNode ): any; 
AllLeaves( arg1?: btDbvtNode ): any; 
 

                } 

            }
        