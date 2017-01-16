
            declare namespace Ammo { 

                export class ClosestRayResultCallback { 

                    constructor( rayFromWorld?: btVector3, rayToWorld?: btVector3 ); 

                    m_rayFromWorld: btVector3; 
m_rayToWorld: btVector3; 
m_hitNormalWorld: btVector3; 
m_hitPointWorld: btVector3; 
m_closestHitFraction: any; 
m_collisionObject: btCollisionObject; 
m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
m_flags: number; 
 

                    addSingleResult( rayResult?: any, normalInWorldSpace?: boolean ): any; 
RayResultCallback(  ): any; 
hasHit(  ): boolean; 
RayResultCallback(  ): any; 
needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
 

                } 

            }
        