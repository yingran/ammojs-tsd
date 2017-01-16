
            declare namespace Ammo { 

                export class btConvex2dConvex2dAlgorithm { 

                    constructor( mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, simplexSolver?: btSimplexSolverInterface, pdSolver?: btConvexPenetrationDepthSolver, numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number ); 

                    m_simplexSolver: btSimplexSolverInterface; 
m_pdSolver: btConvexPenetrationDepthSolver; 
m_ownManifold: boolean; 
m_manifoldPtr: btPersistentManifold; 
m_lowLevelOfDetail: boolean; 
m_numPerturbationIterations: number; 
m_minimumPointsPerturbationThreshold: number; 
 

                    processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
setLowLevelOfDetail( useLowLevel?: boolean ): void; 
getManifold(  ): btPersistentManifold; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): any; 
btActivatingCollisionAlgorithm(  ): any; 
btCollisionAlgorithm(  ): any; 
btCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btCollisionAlgorithm(  ): any; 
 

                } 

            }
        