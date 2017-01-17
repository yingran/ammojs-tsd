
            declare namespace Ammo { 

                export class btCollisionWorld { 

                    constructor( dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration ); 

                    m_collisionObjects: any; 
m_dispatcher1: btDispatcher; 
m_dispatchInfo: btDispatcherInfo; 
m_broadphasePairCache: btBroadphaseInterface; 
m_debugDrawer: btIDebugDraw; 
m_forceUpdateAllAabbs: boolean; 
 

                    setBroadphase( pairCache?: btBroadphaseInterface ): void; 
getBroadphase(  ): btBroadphaseInterface; 
getBroadphase(  ): btBroadphaseInterface; 
getPairCache(  ): btOverlappingPairCache; 
getDispatcher(  ): btDispatcher; 
getDispatcher(  ): btDispatcher; 
updateSingleAabb( colObj?: btCollisionObject ): void; 
updateAabbs(  ): void; 
computeOverlappingPairs(  ): void; 
setDebugDrawer( debugDrawer?: btIDebugDraw ): void; 
getDebugDrawer(  ): btIDebugDraw; 
debugDrawWorld(  ): void; 
debugDrawObject( worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3 ): void; 
getNumCollisionObjects(  ): number; 
rayTest( rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any ): void; 
convexSweepTest( castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any ): void; 
contactTest( colObj?: btCollisionObject, resultCallback?: any ): void; 
contactPairTest( colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any ): void; 
addCollisionObject( collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number ): void; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
removeCollisionObject( collisionObject?: btCollisionObject ): void; 
performDiscreteCollisionDetection(  ): void; 
getDispatchInfo(  ): btDispatcherInfo; 
getDispatchInfo(  ): btDispatcherInfo; 
getForceUpdateAllAabbs(  ): boolean; 
setForceUpdateAllAabbs( forceUpdateAllAabbs?: boolean ): void; 
serialize( serializer?: btSerializer ): void; 
serializeCollisionObjects( serializer?: btSerializer ): void; 
 

                } 

            }
        