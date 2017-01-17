
            declare namespace Ammo { 

                export class ConvexResultCallback { 

                    constructor(  ); 

                    m_closestHitFraction: any; 
m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
 

                    hasHit(  ): boolean; 
needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
addSingleResult( convexResult?: any, normalInWorldSpace?: boolean ): any; 
 

                } 

            }
        