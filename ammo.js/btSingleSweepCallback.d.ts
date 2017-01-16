
            declare namespace Ammo { 

                export class btSingleSweepCallback { 

                    constructor( castShape?: btConvexShape, convexFromTrans?: btTransform, convexToTrans?: btTransform, world?: btCollisionWorld, resultCallback?: btCollisionWorld::ConvexResultCallback, allowedPenetration?: any ); 

                    m_convexFromTrans: btTransform; 
m_convexToTrans: btTransform; 
m_hitNormal: btVector3; 
m_world: btCollisionWorld; 
m_resultCallback: btCollisionWorld::ConvexResultCallback; 
m_allowedCcdPenetration: any; 
m_castShape: btConvexShape; 
m_rayDirectionInverse: btVector3; 
m_signs: number; 
m_lambda_max: any; 
 

                    process( proxy?: btBroadphaseProxy ): boolean; 
btBroadphaseRayCallback(  ): any; 
btBroadphaseAabbCallback(  ): any; 
 

                } 

            }
        