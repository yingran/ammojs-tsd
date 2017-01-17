
            declare namespace Ammo { 

                export class GIM_BVH_TREE_NODE { 

                    constructor(  ); 

                    m_bound: btAABB; 
m_escapeIndexOrDataIndex: number; 
 

                    isLeafNode(  ): boolean; 
getEscapeIndex(  ): number; 
setEscapeIndex( index?: number ): void; 
getDataIndex(  ): number; 
setDataIndex( index?: number ): void; 
 

                } 

            }
        