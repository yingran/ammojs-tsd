
            declare namespace Ammo { 

                export class btBvhSubtreeInfo { 

                    constructor(  ); 

                    m_quantizedAabbMin: number; 
m_quantizedAabbMax: number; 
m_rootNodeIndex: number; 
m_subtreeSize: number; 
m_padding: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
setAabbFromQuantizeNode( quantizedNode?: btQuantizedBvhNode ): void; 
 

                } 

            }
        