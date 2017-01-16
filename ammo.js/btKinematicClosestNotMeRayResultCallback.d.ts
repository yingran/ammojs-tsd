
            declare namespace Ammo { 

                export class btKinematicClosestNotMeRayResultCallback { 

                    constructor( me?: btCollisionObject ); 

                    m_me: btCollisionObject; 
 

                    addSingleResult( rayResult?: btCollisionWorld::LocalRayResult, normalInWorldSpace?: boolean ): any; 
ClosestRayResultCallback( rayFromWorld?: btVector3, rayToWorld?: btVector3 ): any; 
RayResultCallback(  ): any; 
hasHit(  ): boolean; 
RayResultCallback(  ): any; 
needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
 

                } 

            }
        