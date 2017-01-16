
            declare namespace Ammo { 

                export class btCompoundCompoundCollisionAlgorithm { 

                    constructor( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean ); 

                    m_childCollisionAlgorithmCache: btHashedSimplePairCache; 
m_removePairs: btSimplePairArray; 
m_compoundShapeRevision0: number; 
m_compoundShapeRevision1: number; 
 

                    processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
btCompoundCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean ): any; 
btCompoundCollisionAlgorithm(  ): any; 
getChildAlgorithm( n?: number ): btCollisionAlgorithm; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): any; 
btActivatingCollisionAlgorithm(  ): any; 
btCollisionAlgorithm(  ): any; 
btCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btCollisionAlgorithm(  ): any; 
removeChildAlgorithms(  ): void; 
 

                } 

            }
        