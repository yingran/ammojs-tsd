
            declare namespace Ammo { 

                export class TrimeshPrimitiveManager { 

                    constructor( meshInterface?: btStridingMeshInterface, part?: number ); 

                    m_margin: any; 
m_meshInterface: btStridingMeshInterface; 
m_scale: btVector3; 
m_part: number; 
m_lock_count: number; 
vertexbase: any; 
numverts: number; 
type: any; 
stride: number; 
indexbase: any; 
indexstride: number; 
numfaces: number; 
indicestype: any; 
 

                    lock(  ): void; 
unlock(  ): void; 
is_trimesh(  ): boolean; 
get_primitive_count(  ): number; 
get_vertex_count(  ): number; 
get_indices( face_index?: number, i0?: number, i1?: number, i2?: number ): void; 
get_vertex( vertex_index?: number, vertex?: btVector3 ): void; 
get_primitive_box( prim_index?: number, primbox?: btAABB ): void; 
get_primitive_triangle( prim_index?: number, triangle?: btPrimitiveTriangle ): void; 
get_bullet_triangle( prim_index?: number, triangle?: btTriangleShapeEx ): void; 
btPrimitiveManagerBase(  ): any; 
 

                } 

            }
        