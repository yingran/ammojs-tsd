
            declare namespace Ammo { 

                export class GIM_TRIANGLE { 

                    constructor(  ); 

                    m_margin: any; 
m_vertices: btVector3; 
 

                    get_box(  ): any; 
get_normal( normal?: btVector3 ): void; 
get_plane( plane?: btVector4 ): void; 
apply_transform( trans?: btTransform ): void; 
get_edge_plane( edge_index?: any, triangle_normal?: btVector3, plane?: btVector4 ): void; 
get_triangle_transform( triangle_transform?: btTransform ): void; 
collide_triangle_hard_test( other?: any, contact_data?: any ): boolean; 
collide_triangle( other?: any, contact_data?: any ): boolean; 
get_uv_parameters( point?: btVector3, tri_plane?: btVector3, u?: any, v?: any ): boolean; 
is_point_inside( point?: btVector3, tri_normal?: btVector3 ): boolean; 
ray_collision( vPoint?: btVector3, vDir?: btVector3, pout?: btVector3, triangle_normal?: btVector3, tparam?: any, tmax?: any ): boolean; 
ray_collision_front_side( vPoint?: btVector3, vDir?: btVector3, pout?: btVector3, triangle_normal?: btVector3, tparam?: any, tmax?: any ): boolean; 
 

                } 

            }
        