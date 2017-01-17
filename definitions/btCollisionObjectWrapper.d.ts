
            declare namespace Ammo { 

                export class btCollisionObjectWrapper { 

                    constructor( parent?: btCollisionObjectWrapper, shape?: btCollisionShape, collisionObject?: btCollisionObject, worldTransform?: btTransform, partId?: number, index?: number ); 

                    m_parent: btCollisionObjectWrapper; 
m_shape: btCollisionShape; 
m_collisionObject: btCollisionObject; 
m_worldTransform: btTransform; 
m_partId: number; 
m_index: number; 
 

                    getWorldTransform(  ): btTransform; 
getCollisionObject(  ): btCollisionObject; 
getCollisionShape(  ): btCollisionShape; 
 

                } 

            }
        