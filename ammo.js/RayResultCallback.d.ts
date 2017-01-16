
            declare namespace Ammo { 

                export class RayResultCallback { 

                    constructor(  ); 

                    m_closestHitFraction: any; 
m_collisionObject: btCollisionObject; 
m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
m_flags: number; 
 

                    hasHit(  ): boolean; 
needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
addSingleResult( rayResult?: any, normalInWorldSpace?: boolean ): any; 
 

                } 

            }
        