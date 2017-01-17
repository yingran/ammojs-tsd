
            declare namespace Ammo { 

                export class btWheelContactPoint { 

                    constructor( body0?: btRigidBody, body1?: btRigidBody, frictionPosWorld?: btVector3, frictionDirectionWorld?: btVector3, maxImpulse?: any ); 

                    m_body0: btRigidBody; 
m_body1: btRigidBody; 
m_frictionPositionWorld: btVector3; 
m_frictionDirectionWorld: btVector3; 
m_jacDiagABInv: any; 
m_maxImpulse: any; 
 

                     

                } 

            }
        