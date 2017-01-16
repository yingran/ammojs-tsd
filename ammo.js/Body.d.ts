
            declare namespace Ammo { 

                export class Body { 

                    constructor( colObj?: btCollisionObject ); 

                    m_soft: any; 
m_rigid: btRigidBody; 
m_collisionObject: btCollisionObject; 
 

                    activate(  ): void; 
invWorldInertia(  ): btMatrix3x3; 
invMass(  ): any; 
xform(  ): btTransform; 
linearVelocity(  ): btVector3; 
angularVelocity( rpos?: btVector3 ): btVector3; 
angularVelocity(  ): btVector3; 
velocity( rpos?: btVector3 ): btVector3; 
applyVImpulse( impulse?: btVector3, rpos?: btVector3 ): void; 
applyDImpulse( impulse?: btVector3, rpos?: btVector3 ): void; 
applyImpulse( impulse?: any, rpos?: btVector3 ): void; 
applyVAImpulse( impulse?: btVector3 ): void; 
applyDAImpulse( impulse?: btVector3 ): void; 
applyAImpulse( impulse?: any ): void; 
applyDCImpulse( impulse?: btVector3 ): void; 
 

                } 

            }
        