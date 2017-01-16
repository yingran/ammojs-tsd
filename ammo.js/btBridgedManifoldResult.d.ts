
            declare namespace Ammo { 

                export class btBridgedManifoldResult { 

                    constructor( obj0Wrap?: btCollisionObjectWrapper, obj1Wrap?: btCollisionObjectWrapper, resultCallback?: btCollisionWorld::ContactResultCallback ); 

                    m_resultCallback: btCollisionWorld::ContactResultCallback; 
 

                    addContactPoint( normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any ): void; 
btManifoldResult(  ): any; 
btManifoldResult( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): any; 
btManifoldResult(  ): any; 
setPersistentManifold( manifoldPtr?: btPersistentManifold ): void; 
getPersistentManifold(  ): btPersistentManifold; 
getPersistentManifold(  ): btPersistentManifold; 
setShapeIdentifiersA( partId0?: number, index0?: number ): void; 
setShapeIdentifiersB( partId1?: number, index1?: number ): void; 
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
        