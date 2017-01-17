
            declare namespace Ammo { 

                export class btDbvtBroadphase { 

                    constructor( paircache?: btOverlappingPairCache ); 

                    m_sets: btDbvt; 
m_stageRoots: btDbvtProxy; 
m_paircache: btOverlappingPairCache; 
m_prediction: any; 
m_stageCurrent: number; 
m_fupdates: number; 
m_dupdates: number; 
m_cupdates: number; 
m_newpairs: number; 
m_fixedleft: number; 
m_updates_call: any; 
m_updates_done: any; 
m_updates_ratio: any; 
m_pid: number; 
m_cid: number; 
m_gid: number; 
m_releasepaircache: boolean; 
m_deferedcollide: boolean; 
m_needcleanup: boolean; 
 

                    collide( dispatcher?: btDispatcher ): void; 
optimize(  ): void; 
createProxy( aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void ): btBroadphaseProxy; 
destroyProxy( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
setAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher ): void; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, 0?: any, 0?: any ): void; 
aabbTest( aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback ): void; 
getAabb( proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
calculateOverlappingPairs( dispatcher?: btDispatcher ): void; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getOverlappingPairCache(  ): btOverlappingPairCache; 
getBroadphaseAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
printStats(  ): void; 
resetPool( dispatcher?: btDispatcher ): void; 
performDeferredRemoval( dispatcher?: btDispatcher ): void; 
setVelocityPrediction( prediction?: any ): void; 
getVelocityPrediction(  ): any; 
setAabbForceUpdate( absproxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, arg4?: btDispatcher ): void; 
btBroadphaseInterface(  ): any; 
 

                } 

            }
        