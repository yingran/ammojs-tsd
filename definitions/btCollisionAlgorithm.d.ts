
            declare namespace Ammo { 

                export class btCollisionAlgorithm { 

                    constructor( ci?: btCollisionAlgorithmConstructionInfo ); 

                    m_dispatcher: btDispatcher; 
 

                    processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
 

                } 

            }
        