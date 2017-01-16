
            declare namespace Ammo { 

                export class btQuantizedBvh { 

                    constructor( other?: btQuantizedBvh, ownsMemory?: boolean ); 

                    m_bvhAabbMin: btVector3; 
m_bvhAabbMax: btVector3; 
m_bvhQuantization: btVector3; 
m_bulletVersion: number; 
m_curNodeIndex: number; 
m_useQuantization: boolean; 
m_leafNodes: any; 
m_contiguousNodes: any; 
m_quantizedLeafNodes: any; 
m_quantizedContiguousNodes: any; 
m_traversalMode: btTraversalMode; 
m_SubtreeHeaders: any; 
m_subtreeHeaderCount: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
setQuantizationValues( bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, quantizationMargin?: any ): void; 
getLeafNodeArray(  ): any; 
buildInternal(  ): void; 
reportAabbOverlappingNodex( nodeCallback?: btNodeOverlapCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
reportRayOverlappingNodex( nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3 ): void; 
reportBoxCastOverlappingNodex( nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
quantize( out?: number, point?: btVector3, isMax?: number ): void; 
quantizeWithClamp( out?: number, point2?: btVector3, isMax?: number ): void; 
unQuantize( vecIn?: number ): btVector3; 
setTraversalMode( traversalMode?: btTraversalMode ): void; 
getQuantizedNodeArray(  ): any; 
getSubtreeInfoArray(  ): any; 
calculateSerializeBufferSize(  ): any; 
serialize( o_alignedDataBuffer?: void, i_dataBufferSize?: any, i_swapEndian?: boolean ): boolean; 
calculateSerializeBufferSizeNew(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
deSerializeFloat( quantizedBvhFloatData?: btQuantizedBvhFloatData ): void; 
deSerializeDouble( quantizedBvhDoubleData?: btQuantizedBvhDoubleData ): void; 
isQuantized(  ): boolean; 
setInternalNodeAabbMin( nodeIndex?: number, aabbMin?: btVector3 ): void; 
setInternalNodeAabbMax( nodeIndex?: number, aabbMax?: btVector3 ): void; 
getAabbMin( nodeIndex?: number ): btVector3; 
getAabbMax( nodeIndex?: number ): btVector3; 
setInternalNodeEscapeIndex( nodeIndex?: number, escapeIndex?: number ): void; 
mergeInternalNodeAabb( nodeIndex?: number, newAabbMin?: btVector3, newAabbMax?: btVector3 ): void; 
swapLeafNodes( firstIndex?: number, secondIndex?: number ): void; 
assignInternalNodeFromLeafNode( internalNode?: number, leafNodeIndex?: number ): void; 
buildTree( startIndex?: number, endIndex?: number ): void; 
calcSplittingAxis( startIndex?: number, endIndex?: number ): number; 
sortAndCalcSplittingIndex( startIndex?: number, endIndex?: number, splitAxis?: number ): number; 
walkStacklessTree( nodeCallback?: btNodeOverlapCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
walkStacklessQuantizedTreeAgainstRay( nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3, aabbMin?: btVector3, aabbMax?: btVector3, startNodeIndex?: number, endNodeIndex?: number ): void; 
walkStacklessQuantizedTree( nodeCallback?: btNodeOverlapCallback, quantizedQueryAabbMin?: number, quantizedQueryAabbMax?: number, startNodeIndex?: number, endNodeIndex?: number ): void; 
walkStacklessTreeAgainstRay( nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3, aabbMin?: btVector3, aabbMax?: btVector3, startNodeIndex?: number, endNodeIndex?: number ): void; 
walkStacklessQuantizedTreeCacheFriendly( nodeCallback?: btNodeOverlapCallback, quantizedQueryAabbMin?: number, quantizedQueryAabbMax?: number ): void; 
walkRecursiveQuantizedTreeAgainstQueryAabb( currentNode?: btQuantizedBvhNode, nodeCallback?: btNodeOverlapCallback, quantizedQueryAabbMin?: number, quantizedQueryAabbMax?: number ): void; 
walkRecursiveQuantizedTreeAgainstQuantizedTree( treeNodeA?: btQuantizedBvhNode, treeNodeB?: btQuantizedBvhNode, nodeCallback?: btNodeOverlapCallback ): void; 
updateSubtreeHeaders( leftChildNodexIndex?: number, rightChildNodexIndex?: number ): void; 
 

                } 

            }
        