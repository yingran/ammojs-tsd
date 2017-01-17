
            declare namespace Ammo { 

                export class CompoundPrimitiveManager { 

                    constructor( compoundShape?: btGImpactCompoundShape ); 

                    m_compoundShape: btGImpactCompoundShape; 
 

                    is_trimesh(  ): boolean; 
get_primitive_count(  ): number; 
get_primitive_box( prim_index?: number, primbox?: btAABB ): void; 
get_primitive_triangle( prim_index?: number, triangle?: btPrimitiveTriangle ): void; 
btPrimitiveManagerBase(  ): any; 
 

                } 

            }
        