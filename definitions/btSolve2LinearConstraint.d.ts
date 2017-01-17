
            declare namespace Ammo { 

                export class btSolve2LinearConstraint { 

                    constructor( tau?: any, damping?: any ); 

                    m_tau: any; 
m_damping: any; 
 

                    resolveUnilateralPairConstraint( body0?: btRigidBody, body1?: btRigidBody, world2A?: btMatrix3x3, world2B?: btMatrix3x3, invInertiaADiag?: btVector3, invMassA?: any, linvelA?: btVector3, angvelA?: btVector3, rel_posA1?: btVector3, invInertiaBDiag?: btVector3, invMassB?: any, linvelB?: btVector3, angvelB?: btVector3, rel_posA2?: btVector3, depthA?: any, normalA?: btVector3, rel_posB1?: btVector3, rel_posB2?: btVector3, depthB?: any, normalB?: btVector3, imp0?: any, imp1?: any ): void; 
resolveBilateralPairConstraint( body0?: btRigidBody, body1?: btRigidBody, world2A?: btMatrix3x3, world2B?: btMatrix3x3, invInertiaADiag?: btVector3, invMassA?: any, linvelA?: btVector3, angvelA?: btVector3, rel_posA1?: btVector3, invInertiaBDiag?: btVector3, invMassB?: any, linvelB?: btVector3, angvelB?: btVector3, rel_posA2?: btVector3, depthA?: any, normalA?: btVector3, rel_posB1?: btVector3, rel_posB2?: btVector3, depthB?: any, normalB?: btVector3, imp0?: any, imp1?: any ): void; 
 

                } 

            }
        