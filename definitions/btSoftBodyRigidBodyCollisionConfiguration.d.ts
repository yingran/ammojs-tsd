
            declare namespace Ammo { 

                export class btSoftBodyRigidBodyCollisionConfiguration { 

                    constructor( constructionInfo?: btDefaultCollisionConstructionInfo ); 

                    m_softSoftCreateFunc: btCollisionAlgorithmCreateFunc; 
m_softRigidConvexCreateFunc: btCollisionAlgorithmCreateFunc; 
m_swappedSoftRigidConvexCreateFunc: btCollisionAlgorithmCreateFunc; 
m_softRigidConcaveCreateFunc: btCollisionAlgorithmCreateFunc; 
m_swappedSoftRigidConcaveCreateFunc: btCollisionAlgorithmCreateFunc; 
 

                    getCollisionAlgorithmCreateFunc( proxyType0?: number, proxyType1?: number ): btCollisionAlgorithmCreateFunc; 
btDefaultCollisionConfiguration( constructionInfo?: btDefaultCollisionConstructionInfo ): any; 
btDefaultCollisionConfiguration(  ): any; 
getPersistentManifoldPool(  ): btPoolAllocator; 
getCollisionAlgorithmPool(  ): btPoolAllocator; 
getSimplexSolver(  ): btVoronoiSimplexSolver; 
setConvexConvexMultipointIterations( numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number ): void; 
setPlaneConvexMultipointIterations( numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number ): void; 
btCollisionConfiguration(  ): any; 
 

                } 

            }
        