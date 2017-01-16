
            declare namespace Ammo { 

                export class GIM_TRIANGLE_CALCULATION_CACHE { 

                    constructor(  ); 

                    margin: any; 
tu_vertices: btVector3; 
tv_vertices: btVector3; 
tu_plane: btVector4; 
tv_plane: btVector4; 
closest_point_u: btVector3; 
closest_point_v: btVector3; 
edge_edge_dir: btVector3; 
distances: btVector3; 
du: any; 
du0du1: any; 
du0du2: any; 
dv: any; 
dv0dv1: any; 
dv0dv2: any; 
temp_points: btVector3; 
temp_points1: btVector3; 
contact_points: btVector3; 
 

                    compute_intervals( D0?: any, D1?: any, D2?: any, D0D1?: any, D0D2?: any, scale_edge0?: any, scale_edge1?: any, edge_index0?: any, edge_index1?: any ): boolean; 
clip_triangle( tri_plane?: btVector4, tripoints?: btVector3, srcpoints?: btVector3, clip_points?: btVector3 ): any; 
sort_isect( isect0?: any, isect1?: any, e0?: any, e1?: any, vec0?: btVector3, vec1?: btVector3 ): void; 
cross_line_intersection_test(  ): any; 
triangle_collision( u0?: btVector3, u1?: btVector3, u2?: btVector3, margin_u?: any, v0?: btVector3, v1?: btVector3, v2?: btVector3, margin_v?: any, contacts?: any ): boolean; 
 

                } 

            }
        