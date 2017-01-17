
            declare namespace Ammo { 

                export class btSingleRayCallback { 

                    constructor( rayFromWorld?: btVector3, rayToWorld?: btVector3, world?: btCollisionWorld, resultCallback?: btCollisionWorld::RayResultCallback ); 

                    m_rayFromWorld: btVector3; 
m_rayToWorld: btVector3; 
m_rayFromTrans: btTransform; 
m_rayToTrans: btTransform; 
m_hitNormal: btVector3; 
m_world: btCollisionWorld; 
m_resultCallback: btCollisionWorld::RayResultCallback; 
m_rayDirectionInverse: btVector3; 
m_signs: number; 
m_lambda_max: any; 
 

                    process( proxy?: btBroadphaseProxy ): boolean; 
btBroadphaseRayCallback(  ): any; 
btBroadphaseAabbCallback(  ): any; 
 

                } 

            }
        