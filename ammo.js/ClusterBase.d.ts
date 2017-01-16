
            declare namespace Ammo { 

                export class ClusterBase { 

                    constructor(  ); 

                    erp: any; 
idt: any; 
m_margin: any; 
friction: any; 
threshold: any; 
 

                    SolveContact( res?: btGjkEpaSolver2::sResults, ba?: btSoftBody::Body, bb?: btSoftBody::Body, joint?: btSoftBody::CJoint ): boolean; 
Process( arg1?: btDbvtNode, arg2?: btDbvtNode ): any; 
Process( arg1?: btDbvtNode ): any; 
Process( n?: btDbvtNode, btScalar?: any ): any; 
Descent( arg1?: btDbvtNode ): any; 
AllLeaves( arg1?: btDbvtNode ): any; 
 

                } 

            }
        