
            declare namespace Ammo { 

                export class btGImpactQuantizedBvh { 

                    constructor( primitive_manager?: btPrimitiveManagerBase ); 

                    m_box_tree: btQuantizedBvhTree; 
m_primitive_manager: btPrimitiveManagerBase; 
update: void; 
buildSet: void; 
boxQuery: boolean; 
boxQueryTrans: boolean; 
rayQuery: boolean; 
hasHierarchy: boolean; 
isTrimesh: boolean; 
getNodeCount: number; 
isLeafNode: boolean; 
getNodeData: number; 
getNodeBound: void; 
setNodeBound: void; 
getLeftNode: number; 
getRightNode: number; 
getEscapeNodeIndex: number; 
getNodeTriangle: void; 
get_node_pointer: any; 
find_collision: void; 
 

                    getGlobalBox(  ): btAABB; 
setPrimitiveManager( primitive_manager?: btPrimitiveManagerBase ): void; 
getPrimitiveManager(  ): btPrimitiveManagerBase; 
refit(  ): void; 
 

                } 

            }
        