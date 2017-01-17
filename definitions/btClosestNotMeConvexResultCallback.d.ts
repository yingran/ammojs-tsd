
            declare namespace Ammo { 

                export class btClosestNotMeConvexResultCallback { 

                    constructor( me?: btCollisionObject, fromA?: btVector3, toA?: btVector3, pairCache?: btOverlappingPairCache, dispatcher?: btDispatcher ); 

                    m_me: btCollisionObject; 
m_allowedPenetration: any; 
m_pairCache: btOverlappingPairCache; 
m_dispatcher: btDispatcher; 
m_convexFromWorld: btVector3; 
m_convexToWorld: btVector3; 
m_hitNormalWorld: btVector3; 
m_hitPointWorld: btVector3; 
m_hitCollisionObject: btCollisionObject; 
m_closestHitFraction: any; 
m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
 

                    addSingleResult( convexResult?: btCollisionWorld::LocalConvexResult, normalInWorldSpace?: boolean ): any; 
needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
ClosestConvexResultCallback( convexFromWorld?: btVector3, convexToWorld?: btVector3 ): any; 
ConvexResultCallback(  ): any; 
ConvexResultCallback(  ): any; 
hasHit(  ): boolean; 
 

                } 

            }
        