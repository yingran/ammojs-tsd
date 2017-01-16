
            declare namespace Ammo { 

                export class btKinematicClosestNotMeConvexResultCallback { 

                    constructor( me?: btCollisionObject, up?: btVector3, minSlopeDot?: any ); 

                    m_me: btCollisionObject; 
m_up: btVector3; 
m_minSlopeDot: any; 
 

                    addSingleResult( convexResult?: btCollisionWorld::LocalConvexResult, normalInWorldSpace?: boolean ): any; 
ClosestConvexResultCallback( convexFromWorld?: btVector3, convexToWorld?: btVector3 ): any; 
ConvexResultCallback(  ): any; 
ConvexResultCallback(  ): any; 
hasHit(  ): boolean; 
needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
 

                } 

            }
        