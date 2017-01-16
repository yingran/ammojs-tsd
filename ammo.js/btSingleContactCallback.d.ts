
            declare namespace Ammo { 

                export class btSingleContactCallback { 

                    constructor( collisionObject?: btCollisionObject, world?: btCollisionWorld, resultCallback?: btCollisionWorld::ContactResultCallback ); 

                    m_collisionObject: btCollisionObject; 
m_world: btCollisionWorld; 
m_resultCallback: btCollisionWorld::ContactResultCallback; 
 

                    process( proxy?: btBroadphaseProxy ): boolean; 
btBroadphaseAabbCallback(  ): any; 
 

                } 

            }
        