
            declare namespace Ammo { 

                export class btSolverBody { 

                    constructor(  ); 

                    m_worldTransform: btTransform; 
m_deltaLinearVelocity: btVector3; 
m_deltaAngularVelocity: btVector3; 
m_angularFactor: btVector3; 
m_linearFactor: btVector3; 
m_invMass: btVector3; 
m_pushVelocity: btVector3; 
m_turnVelocity: btVector3; 
m_linearVelocity: btVector3; 
m_angularVelocity: btVector3; 
m_externalForceImpulse: btVector3; 
m_externalTorqueImpulse: btVector3; 
m_originalBody: btRigidBody; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
setWorldTransform( worldTransform?: btTransform ): void; 
getWorldTransform(  ): btTransform; 
getVelocityInLocalPointNoDelta( rel_pos?: btVector3, velocity?: btVector3 ): void; 
getVelocityInLocalPointObsolete( rel_pos?: btVector3, velocity?: btVector3 ): void; 
getAngularVelocity( angVel?: btVector3 ): void; 
applyImpulse( linearComponent?: btVector3, angularComponent?: btVector3, impulseMagnitude?: any ): void; 
internalApplyPushImpulse( linearComponent?: btVector3, angularComponent?: btVector3, impulseMagnitude?: any ): void; 
getDeltaLinearVelocity(  ): btVector3; 
getDeltaAngularVelocity(  ): btVector3; 
getPushVelocity(  ): btVector3; 
getTurnVelocity(  ): btVector3; 
internalGetDeltaLinearVelocity(  ): btVector3; 
internalGetDeltaAngularVelocity(  ): btVector3; 
internalGetAngularFactor(  ): btVector3; 
internalGetInvMass(  ): btVector3; 
internalSetInvMass( invMass?: btVector3 ): void; 
internalGetPushVelocity(  ): btVector3; 
internalGetTurnVelocity(  ): btVector3; 
internalGetVelocityInLocalPointObsolete( rel_pos?: btVector3, velocity?: btVector3 ): void; 
internalGetAngularVelocity( angVel?: btVector3 ): void; 
internalApplyImpulse( linearComponent?: btVector3, angularComponent?: btVector3, impulseMagnitude?: any ): void; 
writebackVelocity(  ): void; 
writebackVelocityAndTransform( timeStep?: any, splitImpulseTurnErp?: any ): void; 
 

                } 

            }
        