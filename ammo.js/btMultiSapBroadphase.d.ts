
            declare namespace Ammo { 

                export class btMultiSapBroadphase { 

                    constructor( maxProxies?: number, pairCache?: btOverlappingPairCache ); 

                    m_multiSapProxies: any; 
m_sapBroadphases: btSapBroadphaseArray; 
m_simpleBroadphase: btSimpleBroadphase; 
m_overlappingPairs: btOverlappingPairCache; 
m_optimizedAabbTree: btQuantizedBvh; 
m_ownsPairCache: boolean; 
m_filterCallback: btOverlapFilterCallback; 
m_invalidPair: number; 
 

                    getBroadphaseArray(  ): btSapBroadphaseArray; 
getBroadphaseArray(  ): btSapBroadphaseArray; 
createProxy( aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void ): btBroadphaseProxy; 
destroyProxy( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
setAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher ): void; 
getAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, 0?: any, 0?: any ): void; 
addToChildBroadphase( parentMultiSapProxy?: btMultiSapProxy, childProxy?: btBroadphaseProxy, childBroadphase?: btBroadphaseInterface ): void; 
calculateOverlappingPairs( dispatcher?: btDispatcher ): void; 
testAabbOverlap( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): boolean; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getBroadphaseAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
buildTree( bvhAabbMin?: btVector3, bvhAabbMax?: btVector3 ): void; 
printStats(  ): void; 
quicksort( a?: btBroadphasePairArray, lo?: number, hi?: number ): void; 
resetPool( dispatcher?: btDispatcher ): void; 
btBroadphaseInterface(  ): any; 
aabbTest( aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback ): void; 
 

                } 

            }
        