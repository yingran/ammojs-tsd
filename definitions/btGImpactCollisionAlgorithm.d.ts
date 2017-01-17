
            declare namespace Ammo { 

                export class btGImpactCollisionAlgorithm { 

                    constructor(  ); 

                    m_convex_algorithm: btCollisionAlgorithm; 
m_manifoldPtr: btPersistentManifold; 
m_resultOut: btManifoldResult; 
m_dispatchInfo: btDispatcherInfo; 
m_triface0: number; 
m_part0: number; 
m_triface1: number; 
m_part1: number; 
m_dispatcher: btDispatcher; 
collide_gjk_triangles: void; 
collide_sat_triangles: void; 
shape_vs_shape_collision: void; 
convex_vs_convex_collision: void; 
gimpact_vs_gimpact_find_pairs: void; 
gimpact_vs_shape_find_pairs: void; 
gimpacttrimeshpart_vs_plane_collision: void; 
btGImpactCollisionAlgorithm: any; 
btGImpactCollisionAlgorithm: any; 
processCollision: void; 
calculateTimeOfImpact: any; 
getAllContactManifolds: void; 
internalGetResultOut: btManifoldResult; 
gimpact_vs_gimpact: void; 
gimpact_vs_shape: void; 
gimpact_vs_compoundshape: void; 
gimpact_vs_concave: void; 
setFace0: void; 
getFace0: number; 
setFace1: void; 
getFace1: number; 
setPart0: void; 
getPart0: number; 
setPart1: void; 
getPart1: number; 
registerAlgorithm: void; 
 

                    newContactManifold( body0?: btCollisionObject, body1?: btCollisionObject ): btPersistentManifold; 
destroyConvexAlgorithm(  ): void; 
destroyContactManifolds(  ): void; 
clearCache(  ): void; 
getLastManifold(  ): btPersistentManifold; 
checkManifold( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): void; 
newAlgorithm( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): btCollisionAlgorithm; 
checkConvexAlgorithm( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ): void; 
addContactPoint( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, point?: btVector3, normal?: btVector3, distance?: any ): void; 
 

                } 

            }
        