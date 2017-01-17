
            declare namespace Ammo { 

                export class btBvhTree { 

                    constructor(  ); 

                    m_num_nodes: number; 
m_node_array: any; 
 

                    build_tree( primitive_boxes?: any ): void; 
clearNodes(  ): void; 
getNodeCount(  ): number; 
isLeafNode( nodeindex?: number ): boolean; 
getNodeData( nodeindex?: number ): number; 
getNodeBound( nodeindex?: number, bound?: btAABB ): void; 
setNodeBound( nodeindex?: number, bound?: btAABB ): void; 
getLeftNode( nodeindex?: number ): number; 
getRightNode( nodeindex?: number ): number; 
getEscapeNodeIndex( nodeindex?: number ): number; 
get_node_pointer( index?: number ): any; 
_sort_and_calc_splitting_index( primitive_boxes?: any, startIndex?: number, endIndex?: number, splitAxis?: number ): number; 
_calc_splitting_axis( primitive_boxes?: any, startIndex?: number, endIndex?: number ): number; 
_build_sub_tree( primitive_boxes?: any, startIndex?: number, endIndex?: number ): void; 
 

                } 

            }
        