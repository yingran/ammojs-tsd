
            declare namespace Ammo { 

                export class btManifoldResult { 

                    constructor( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ); 

                    m_manifoldPtr: btPersistentManifold; 
m_body0Wrap: btCollisionObjectWrapper; 
m_body1Wrap: btCollisionObjectWrapper; 
m_partId0: number; 
m_partId1: number; 
m_index0: number; 
m_index1: number; 
 

                    setPersistentManifold( manifoldPtr?: btPersistentManifold ): void; 
getPersistentManifold(  ): btPersistentManifold; 
getPersistentManifold(  ): btPersistentManifold; 
setShapeIdentifiersA( partId0?: number, index0?: number ): void; 
setShapeIdentifiersB( partId1?: number, index1?: number ): void; 
addContactPoint( normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any ): void; 
refreshContactPoints(  ): void; 
getBody0Wrap(  ): btCollisionObjectWrapper; 
getBody1Wrap(  ): btCollisionObjectWrapper; 
setBody0Wrap( obj0Wrap?: btCollisionObjectWrapper ): void; 
setBody1Wrap( obj1Wrap?: btCollisionObjectWrapper ): void; 
getBody0Internal(  ): btCollisionObject; 
getBody1Internal(  ): btCollisionObject; 
Result(  ): any; 
 

                } 

            }
        