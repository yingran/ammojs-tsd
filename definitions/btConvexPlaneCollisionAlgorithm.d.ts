
            declare namespace Ammo { 

                export class btConvexPlaneCollisionAlgorithm { 

                    constructor( mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean, numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number ); 

                    m_ownManifold: boolean; 
m_manifoldPtr: btPersistentManifold; 
m_isSwapped: boolean; 
m_numPerturbationIterations: number; 
m_minimumPointsPerturbationThreshold: number; 
 

                    processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
collideSingleContact( perturbeRot?: btQuaternion, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
btCollisionAlgorithm(  ): any; 
btCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btCollisionAlgorithm(  ): any; 
 

                } 

            }
        