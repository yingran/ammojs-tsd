
            declare namespace Ammo { 

                export class GIM_AABB { 

                    constructor( V1?: btVector3, V2?: btVector3, V3?: btVector3, margin?: any ); 

                    m_min: btVector3; 
m_max: btVector3; 
 

                    invalidate(  ): void; 
increment_margin( margin?: any ): void; 
copy_with_margin( other?: any, margin?: any ): void; 
appy_transform( trans?: btTransform ): void; 
merge( box?: any ): void; 
get_center_extend( center?: btVector3, extend?: btVector3 ): void; 
find_intersection( other?: any, intersection?: any ): void; 
has_collision( other?: any ): boolean; 
collide_ray( vorigin?: btVector3, vdir?: btVector3 ): boolean; 
projection_interval( direction?: btVector3, vmin?: any, vmax?: any ): void; 
plane_classify( plane?: btVector4 ): any; 
overlapping_trans_conservative( box?: any, trans1_to_0?: btTransform ): boolean; 
overlapping_trans_cache( box?: any, transcache?: any, fulltest?: boolean ): boolean; 
collide_plane( plane?: btVector4 ): boolean; 
collide_triangle_exact( p1?: btVector3, p2?: btVector3, p3?: btVector3, triangle_plane?: btVector4 ): boolean; 
 

                } 

            }
        