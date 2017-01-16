
            declare namespace Ammo { 

                export class RayFromToCaster { 

                    constructor( rayFrom?: btVector3, rayTo?: btVector3, mxt?: any ); 

                    m_rayFrom: btVector3; 
m_rayTo: btVector3; 
m_rayNormalizedDirection: btVector3; 
m_mint: any; 
m_face: any; 
m_tests: number; 
 

                    Process( leaf?: btDbvtNode ): void; 
Process( arg1?: btDbvtNode, arg2?: btDbvtNode ): any; 
Process( arg1?: btDbvtNode ): any; 
Process( n?: btDbvtNode, btScalar?: any ): any; 
Descent( arg1?: btDbvtNode ): any; 
AllLeaves( arg1?: btDbvtNode ): any; 
 

                } 

            }
        