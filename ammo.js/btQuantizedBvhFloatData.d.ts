
            declare namespace Ammo { 

                export class btQuantizedBvhFloatData { 

                    constructor(  ); 

                    m_bvhAabbMin: btVector3FloatData; 
m_bvhAabbMax: btVector3FloatData; 
m_bvhQuantization: btVector3FloatData; 
m_curNodeIndex: number; 
m_useQuantization: number; 
m_numContiguousLeafNodes: number; 
m_numQuantizedContiguousNodes: number; 
m_contiguousNodesPtr: btOptimizedBvhNodeFloatData; 
m_quantizedContiguousNodesPtr: btQuantizedBvhNodeData; 
m_subTreeInfoPtr: btBvhSubtreeInfoData; 
m_traversalMode: number; 
m_numSubtreeHeaders: number; 
 

                     

                } 

            }
        