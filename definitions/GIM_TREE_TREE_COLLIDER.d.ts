
            declare namespace Ammo { 

                export class GIM_TREE_TREE_COLLIDER { 

                    constructor(  ); 

                    m_collision_pairs: any; 
m_boxset0: any; 
m_boxset1: any; 
current_node0: any; 
current_node1: any; 
node0_is_leaf: boolean; 
node1_is_leaf: boolean; 
t0_is_trimesh: boolean; 
t1_is_trimesh: boolean; 
node0_has_triangle: boolean; 
node1_has_triangle: boolean; 
m_box0: any; 
m_box1: any; 
trans_cache_1to0: any; 
trans_cache_0to1: btTransform; 
m_tri0: any; 
m_tri0_plane: btVector4; 
m_tri1: any; 
m_tri1_plane: btVector4; 
 

                    find_collision( boxset1?: any, trans1?: btTransform, boxset2?: any, trans2?: btTransform, collision_pairs?: any, complete_primitive_tests?: boolean ): void; 
retrieve_node0_triangle( node0?: any ): void; 
retrieve_node1_triangle( node1?: any ): void; 
retrieve_node0_info( node0?: any ): void; 
retrieve_node1_info( node1?: any ): void; 
node_collision( node0?: any, node1?: any ): boolean; 
find_collision_pairs(  ): void; 
 

                } 

            }
        