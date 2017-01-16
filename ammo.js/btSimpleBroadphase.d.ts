
            declare namespace Ammo { 

                export class btSimpleBroadphase { 

                    constructor( maxProxies?: number, overlappingPairCache?: btOverlappingPairCache ); 

                    m_numHandles: number; 
m_maxHandles: number; 
m_LastHandleIndex: number; 
m_pHandles: btSimpleBroadphaseProxy; 
m_pHandlesRawPtr: any; 
m_firstFreeHandle: number; 
m_pairCache: btOverlappingPairCache; 
m_ownsPairCache: boolean; 
m_invalidPair: number; 
 

                    createProxy( aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void ): btBroadphaseProxy; 
calculateOverlappingPairs( dispatcher?: btDispatcher ): void; 
destroyProxy( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
setAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher ): void; 
getAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, 0?: any, 0?: any ): void; 
aabbTest( aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback ): void; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
testAabbOverlap( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): boolean; 
getBroadphaseAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
printStats(  ): void; 
btBroadphaseInterface(  ): any; 
allocHandle(  ): number; 
freeHandle( proxy?: btSimpleBroadphaseProxy ): void; 
getSimpleProxyFromProxy( proxy?: btBroadphaseProxy ): btSimpleBroadphaseProxy; 
getSimpleProxyFromProxy( proxy?: btBroadphaseProxy ): btSimpleBroadphaseProxy; 
resetPool( dispatcher?: btDispatcher ): void; 
validate(  ): void; 
 

                } 

            }
        