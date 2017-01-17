
            declare namespace Ammo { 

                export class btCollisionDispatcher { 

                    constructor( collisionConfiguration?: btCollisionConfiguration ); 

                    m_dispatcherFlags: number; 
m_manifoldsPtr: any; 
m_defaultManifoldResult: btManifoldResult; 
m_nearCallback: btNearCallback; 
m_collisionAlgorithmPoolAllocator: btPoolAllocator; 
m_persistentManifoldPoolAllocator: btPoolAllocator; 
m_doubleDispatch: btCollisionAlgorithmCreateFunc; 
m_collisionConfiguration: btCollisionConfiguration; 
 

                    getDispatcherFlags(  ): number; 
setDispatcherFlags( flags?: number ): void; 
registerCollisionCreateFunc( proxyType0?: number, proxyType1?: number, createFunc?: btCollisionAlgorithmCreateFunc ): void; 
getNumManifolds(  ): number; 
getInternalManifoldPointer(  ): btPersistentManifold; 
getManifoldByIndexInternal( index?: number ): btPersistentManifold; 
getManifoldByIndexInternal( index?: number ): btPersistentManifold; 
getNewManifold( b0?: btCollisionObject, b1?: btCollisionObject ): btPersistentManifold; 
releaseManifold( manifold?: btPersistentManifold ): void; 
clearManifold( manifold?: btPersistentManifold ): void; 
findAlgorithm( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, sharedManifold?: btPersistentManifold ): btCollisionAlgorithm; 
needsCollision( body0?: btCollisionObject, body1?: btCollisionObject ): boolean; 
needsResponse( body0?: btCollisionObject, body1?: btCollisionObject ): boolean; 
dispatchAllCollisionPairs( pairCache?: btOverlappingPairCache, dispatchInfo?: btDispatcherInfo, dispatcher?: btDispatcher ): void; 
setNearCallback( nearCallback?: btNearCallback ): void; 
getNearCallback(  ): btNearCallback; 
allocateCollisionAlgorithm( size?: number ): any; 
freeCollisionAlgorithm( ptr?: void ): void; 
getCollisionConfiguration(  ): btCollisionConfiguration; 
getCollisionConfiguration(  ): btCollisionConfiguration; 
setCollisionConfiguration( config?: btCollisionConfiguration ): void; 
getInternalManifoldPool(  ): btPoolAllocator; 
getInternalManifoldPool(  ): btPoolAllocator; 
btDispatcher(  ): any; 
 

                } 

            }
        