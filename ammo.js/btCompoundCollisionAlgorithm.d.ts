
            declare namespace Ammo { 

                export class btCompoundCollisionAlgorithm { 

                    constructor( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean ); 

                    m_childCollisionAlgorithms: any; 
m_isSwapped: boolean; 
m_sharedManifold: btPersistentManifold; 
m_ownsManifold: boolean; 
m_compoundShapeRevision: number; 
m_dispatcher: btDispatcher; 
 

                    getChildAlgorithm( n?: number ): btCollisionAlgorithm; 
processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): any; 
btActivatingCollisionAlgorithm(  ): any; 
btCollisionAlgorithm(  ): any; 
btCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btCollisionAlgorithm(  ): any; 
removeChildAlgorithms(  ): void; 
preallocateChildAlgorithms( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): void; 
 

                } 

            }
        