
            declare namespace Ammo { 

                export class GIM_BOX_TREE_TEMPLATE_SET { 

                    constructor(  ); 

                    m_primitive_manager: any; 
m_box_tree: any; 
 

                    getGlobalBox(  ): any; 
setPrimitiveManager( primitive_manager?: any ): void; 
getPrimitiveManager(  ): any; 
getPrimitiveManager(  ): any; 
update(  ): void; 
buildSet(  ): void; 
boxQuery( box?: any, collided_results?: any ): boolean; 
boxQueryTrans( box?: any, transform?: btTransform, collided_results?: any ): boolean; 
rayQuery( ray_dir?: btVector3, ray_origin?: btVector3, collided_results?: any ): boolean; 
hasHierarchy(  ): boolean; 
isTrimesh(  ): boolean; 
getNodeCount(  ): any; 
isLeafNode( nodeindex?: any ): boolean; 
getNodeData( nodeindex?: any ): any; 
getNodeBound( nodeindex?: any, bound?: any ): void; 
setNodeBound( nodeindex?: any, bound?: any ): void; 
getLeftNodeIndex( nodeindex?: any ): any; 
getRightNodeIndex( nodeindex?: any ): any; 
getScapeNodeIndex( nodeindex?: any ): any; 
getNodeTriangle( nodeindex?: any, triangle?: any ): void; 
refit(  ): void; 
 

                } 

            }
        