
            declare namespace Ammo { 

                export class BT_QUANTIZED_BVH_NODE { 

                    constructor(  ); 

                    m_quantizedAabbMin: number; 
m_quantizedAabbMax: number; 
m_escapeIndexOrDataIndex: number; 
 

                    isLeafNode(  ): boolean; 
getEscapeIndex(  ): number; 
setEscapeIndex( index?: number ): void; 
getDataIndex(  ): number; 
setDataIndex( index?: number ): void; 
testQuantizedBoxOverlapp( quantizedMin?: number, quantizedMax?: number ): boolean; 
 

                } 

            }
        