
            declare namespace Ammo { 

                export class bt32BitAxisSweep3 { 

                    constructor( worldAabbMin?: btVector3, worldAabbMax?: btVector3, maxHandles?: number, pairCache?: btOverlappingPairCache, disableRaycastAccelerator?: boolean ); 

                     

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btAxisSweep3Internal( worldAabbMin?: btVector3, worldAabbMax?: btVector3, inthandleMask?: any, inthandleSentinel?: any, intmaxHandles?: any, pairCache?: btOverlappingPairCache, disableRaycastAccelerator?: boolean ): any; 
btAxisSweep3Internal(  ): any; 
getNumHandles(  ): number; 
calculateOverlappingPairs( dispatcher?: btDispatcher ): void; 
addHandle( aabbMin?: btVector3, aabbMax?: btVector3, pOwner?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void ): number; 
removeHandle( inthandle?: any, dispatcher?: btDispatcher ): void; 
updateHandle( inthandle?: any, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher ): void; 
getHandle( intindex?: any ): any; 
resetPool( dispatcher?: btDispatcher ): void; 
processAllOverlappingPairs( callback?: btOverlapCallback ): void; 
createProxy( aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void ): btBroadphaseProxy; 
destroyProxy( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
setAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher ): void; 
getAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, 0?: any, 0?: any ): void; 
aabbTest( aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback ): void; 
quantize( out?: number, point?: btVector3, isMax?: number ): void; 
unQuantize( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
testAabbOverlap( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): boolean; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
setOverlappingPairUserCallback( pairCallback?: btOverlappingPairCallback ): void; 
getOverlappingPairUserCallback(  ): btOverlappingPairCallback; 
getBroadphaseAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
printStats(  ): void; 
btBroadphaseInterface(  ): any; 
 

                } 

            }
        