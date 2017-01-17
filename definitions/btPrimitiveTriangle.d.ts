
            declare namespace Ammo { 

                export class btPrimitiveTriangle { 

                    constructor(  ); 

                    m_vertices: btVector3; 
m_plane: btVector4; 
m_margin: any; 
m_dummy: any; 
 

                    buildTriPlane(  ): void; 
overlap_test_conservative( other?: btPrimitiveTriangle ): boolean; 
get_edge_plane( edge_index?: number, plane?: btVector4 ): void; 
applyTransform( t?: btTransform ): void; 
clip_triangle( other?: btPrimitiveTriangle, clipped_points?: btVector3 ): number; 
find_triangle_collision_clip_method( other?: btPrimitiveTriangle, contacts?: any ): boolean; 
 

                } 

            }
        