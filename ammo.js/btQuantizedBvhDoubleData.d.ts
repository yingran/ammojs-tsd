
            declare namespace Ammo { 

                export class btQuantizedBvhDoubleData { 

                    constructor(  ); 

                    m_bvhAabbMin: btVector3DoubleData; 
m_bvhAabbMax: btVector3DoubleData; 
m_bvhQuantization: btVector3DoubleData; 
m_curNodeIndex: number; 
m_useQuantization: number; 
m_numContiguousLeafNodes: number; 
m_numQuantizedContiguousNodes: number; 
m_contiguousNodesPtr: btOptimizedBvhNodeDoubleData; 
m_quantizedContiguousNodesPtr: btQuantizedBvhNodeData; 
m_traversalMode: number; 
m_numSubtreeHeaders: number; 
m_subTreeInfoPtr: btBvhSubtreeInfoData; 
 

                     

                } 

            }
        