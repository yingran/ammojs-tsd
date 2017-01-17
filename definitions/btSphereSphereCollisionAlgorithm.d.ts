
            declare namespace Ammo { 

                export class btSphereSphereCollisionAlgorithm { 

                    constructor( mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, col0Wrap?: btCollisionObjectWrapper, col1Wrap?: btCollisionObjectWrapper ); 

                    m_ownManifold: boolean; 
m_manifoldPtr: btPersistentManifold; 
 

                    processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): any; 
btActivatingCollisionAlgorithm(  ): any; 
btCollisionAlgorithm(  ): any; 
btCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btCollisionAlgorithm(  ): any; 
 

                } 

            }
        