
            declare namespace Ammo { 

                export class btQuantizedBvhNode { 

                    constructor(  ); 

                    m_quantizedAabbMin: number; 
m_quantizedAabbMax: number; 
m_escapeIndexOrTriangleIndex: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
isLeafNode(  ): boolean; 
getEscapeIndex(  ): number; 
getTriangleIndex(  ): number; 
getPartId(  ): number; 
 

                } 

            }
        