
            declare namespace Ammo { 

                export class GIM_BOX_TREE { 

                    constructor(  ); 

                    m_num_nodes: any; 
m_node_array: any; 
 

                    build_tree( primitive_boxes?: any ): void; 
clearNodes(  ): void; 
getNodeCount(  ): any; 
isLeafNode( nodeindex?: any ): boolean; 
getNodeData( nodeindex?: any ): any; 
getNodeBound( nodeindex?: any, bound?: any ): void; 
setNodeBound( nodeindex?: any, bound?: any ): void; 
getLeftNodeIndex( nodeindex?: any ): any; 
getRightNodeIndex( nodeindex?: any ): any; 
getScapeNodeIndex( nodeindex?: any ): any; 
_sort_and_calc_splitting_index( primitive_boxes?: any, startIndex?: any, endIndex?: any, splitAxis?: any ): any; 
_calc_splitting_axis( primitive_boxes?: any, startIndex?: any, endIndex?: any ): any; 
_build_sub_tree( primitive_boxes?: any, startIndex?: any, endIndex?: any ): void; 
 

                } 

            }
        