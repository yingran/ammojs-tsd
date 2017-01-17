
            declare namespace Ammo { 

                export class btOptimizedBvh { 

                    constructor(  ); 

                     

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
build( triangles?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, bvhAabbMin?: btVector3, bvhAabbMax?: btVector3 ): void; 
refit( triangles?: btStridingMeshInterface, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
refitPartial( triangles?: btStridingMeshInterface, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
updateBvhNodes( meshInterface?: btStridingMeshInterface, firstNode?: number, endNode?: number, index?: number ): void; 
serializeInPlace( o_alignedDataBuffer?: void, i_dataBufferSize?: any, i_swapEndian?: boolean ): boolean; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btQuantizedBvh(  ): any; 
btQuantizedBvh(  ): any; 
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
 

                } 

            }
        