
            declare namespace Ammo { 

                export class btPerturbedContactResult { 

                    constructor( originalResult?: btManifoldResult, transformA?: btTransform, transformB?: btTransform, unPerturbedTransform?: btTransform, perturbA?: boolean, debugDrawer?: btIDebugDraw ); 

                    m_originalManifoldResult: btManifoldResult; 
m_transformA: btTransform; 
m_transformB: btTransform; 
m_unPerturbedTransform: btTransform; 
m_perturbA: boolean; 
m_debugDrawer: btIDebugDraw; 
 

                    addContactPoint( normalOnBInWorld?: btVector3, pointInWorld?: btVector3, orgDepth?: any ): void; 
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
        