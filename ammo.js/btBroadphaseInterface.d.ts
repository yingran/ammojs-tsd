
            declare namespace Ammo { 

                export class btBroadphaseInterface { 

                    constructor(  ); 

                     

                    createProxy( aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void ): btBroadphaseProxy; 
destroyProxy( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
setAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher ): void; 
getAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, 0?: any, 0?: any ): void; 
aabbTest( aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback ): void; 
calculateOverlappingPairs( dispatcher?: btDispatcher ): void; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getBroadphaseAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
resetPool( dispatcher?: btDispatcher ): void; 
printStats(  ): void; 
 

                } 

            }
        