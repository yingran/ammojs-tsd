
            declare namespace Ammo { 

                export class AllHitsRayResultCallback { 

                    constructor( rayFromWorld?: btVector3, rayToWorld?: btVector3 ); 

                    m_collisionObjects: any; 
m_rayFromWorld: btVector3; 
m_rayToWorld: btVector3; 
m_hitNormalWorld: any; 
m_hitPointWorld: any; 
m_hitFractions: any; 
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
        