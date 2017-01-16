
            declare namespace Ammo { 

                export class btDefaultCollisionConfiguration { 

                    constructor( constructionInfo?: btDefaultCollisionConstructionInfo ); 

                    m_persistentManifoldPoolSize: number; 
m_persistentManifoldPool: btPoolAllocator; 
m_ownsPersistentManifoldPool: boolean; 
m_collisionAlgorithmPool: btPoolAllocator; 
m_ownsCollisionAlgorithmPool: boolean; 
m_simplexSolver: btVoronoiSimplexSolver; 
m_pdSolver: btConvexPenetrationDepthSolver; 
m_convexConvexCreateFunc: btCollisionAlgorithmCreateFunc; 
m_convexConcaveCreateFunc: btCollisionAlgorithmCreateFunc; 
m_swappedConvexConcaveCreateFunc: btCollisionAlgorithmCreateFunc; 
m_compoundCreateFunc: btCollisionAlgorithmCreateFunc; 
m_compoundCompoundCreateFunc: btCollisionAlgorithmCreateFunc; 
m_swappedCompoundCreateFunc: btCollisionAlgorithmCreateFunc; 
m_emptyCreateFunc: btCollisionAlgorithmCreateFunc; 
m_sphereSphereCF: btCollisionAlgorithmCreateFunc; 
m_sphereBoxCF: btCollisionAlgorithmCreateFunc; 
m_boxSphereCF: btCollisionAlgorithmCreateFunc; 
m_boxBoxCF: btCollisionAlgorithmCreateFunc; 
m_sphereTriangleCF: btCollisionAlgorithmCreateFunc; 
m_triangleSphereCF: btCollisionAlgorithmCreateFunc; 
m_planeConvexCF: btCollisionAlgorithmCreateFunc; 
m_convexPlaneCF: btCollisionAlgorithmCreateFunc; 
 

                    getPersistentManifoldPool(  ): btPoolAllocator; 
getCollisionAlgorithmPool(  ): btPoolAllocator; 
getSimplexSolver(  ): btVoronoiSimplexSolver; 
getCollisionAlgorithmCreateFunc( proxyType0?: number, proxyType1?: number ): btCollisionAlgorithmCreateFunc; 
setConvexConvexMultipointIterations( numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number ): void; 
setPlaneConvexMultipointIterations( numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number ): void; 
btCollisionConfiguration(  ): any; 
 

                } 

            }
        