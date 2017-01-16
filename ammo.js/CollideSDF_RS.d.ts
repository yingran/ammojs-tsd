
            declare namespace Ammo { 

                export class CollideSDF_RS { 

                    constructor(  ); 

                    psb: btSoftBody; 
m_colObj1Wrap: btCollisionObjectWrapper; 
m_rigidBody: btRigidBody; 
dynmargin: any; 
stamargin: any; 
 

                    Process( leaf?: btDbvtNode ): void; 
DoNode( n?: btSoftBody::Node ): void; 
Process( arg1?: btDbvtNode, arg2?: btDbvtNode ): any; 
Process( arg1?: btDbvtNode ): any; 
Process( n?: btDbvtNode, btScalar?: any ): any; 
Descent( arg1?: btDbvtNode ): any; 
AllLeaves( arg1?: btDbvtNode ): any; 
 

                } 

            }
        