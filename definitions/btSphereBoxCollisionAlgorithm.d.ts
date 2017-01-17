
            declare namespace Ammo { 

                export class btSphereBoxCollisionAlgorithm { 

                    constructor( mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean ); 

                    m_ownManifold: boolean; 
m_manifoldPtr: btPersistentManifold; 
m_isSwapped: boolean; 
 

                    processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
getSphereDistance( boxObjWrap?: btCollisionObjectWrapper, v3PointOnBox?: btVector3, normal?: btVector3, penetrationDepth?: any, v3SphereCenter?: btVector3, fRadius?: any, maxContactDistance?: any ): boolean; 
getSpherePenetration( boxHalfExtent?: any, sphereRelPos?: any, closestPoint?: btVector3, normal?: btVector3 ): any; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btActivatingCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): any; 
btActivatingCollisionAlgorithm(  ): any; 
btCollisionAlgorithm(  ): any; 
btCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btCollisionAlgorithm(  ): any; 
 

                } 

            }
        