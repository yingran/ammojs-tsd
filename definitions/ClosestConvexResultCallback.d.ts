
            declare namespace Ammo { 

                export class ClosestConvexResultCallback { 

                    constructor( convexFromWorld?: btVector3, convexToWorld?: btVector3 ); 

                    m_convexFromWorld: btVector3; 
m_convexToWorld: btVector3; 
m_hitNormalWorld: btVector3; 
m_hitPointWorld: btVector3; 
m_hitCollisionObject: btCollisionObject; 
m_closestHitFraction: any; 
m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
 

                    addSingleResult( convexResult?: any, normalInWorldSpace?: boolean ): any; 
ConvexResultCallback(  ): any; 
ConvexResultCallback(  ): any; 
hasHit(  ): boolean; 
needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
 

                } 

            }
        