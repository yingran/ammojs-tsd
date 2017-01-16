
            declare namespace Ammo { 

                export class btMultimaterialTriangleMeshShape { 

                    constructor( meshInterface?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, buildBvh?: boolean ); 

                    m_materialList: any; 
m_triangleMaterials: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getName(  ): any; 
getMaterialProperties( partID?: number, triIndex?: number ): btMaterial; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btBvhTriangleMeshShape( meshInterface?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, buildBvh?: boolean ): any; 
btBvhTriangleMeshShape( meshInterface?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, buildBvh?: boolean ): any; 
btBvhTriangleMeshShape(  ): any; 
getOwnsBvh(  ): boolean; 
performRaycast( callback?: btTriangleCallback, raySource?: btVector3, rayTarget?: btVector3 ): void; 
performConvexcast( callback?: btTriangleCallback, boxSource?: btVector3, boxTarget?: btVector3, boxMin?: btVector3, boxMax?: btVector3 ): void; 
processAllTriangles( callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
refitTree( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
partialRefitTree( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
getOptimizedBvh(  ): btOptimizedBvh; 
setOptimizedBvh( bvh?: btOptimizedBvh, localScaling?: btVector3, 1?: any, 1?: any ): void; 
buildOptimizedBvh(  ): void; 
usesQuantizedAabbCompression(  ): boolean; 
setTriangleInfoMap( triangleInfoMap?: btTriangleInfoMap ): void; 
getTriangleInfoMap(  ): btTriangleInfoMap; 
getTriangleInfoMap(  ): btTriangleInfoMap; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
serializeSingleBvh( serializer?: btSerializer ): void; 
serializeSingleTriangleInfoMap( serializer?: btSerializer ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btTriangleMeshShape(  ): any; 
localGetSupportingVertex( vec?: btVector3 ): btVector3; 
localGetSupportingVertexWithoutMargin( vec?: btVector3 ): btVector3; 
recalcLocalAabb(  ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
getMeshInterface(  ): btStridingMeshInterface; 
getMeshInterface(  ): btStridingMeshInterface; 
getLocalAabbMin(  ): btVector3; 
getLocalAabbMax(  ): btVector3; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConcaveShape(  ): any; 
btConcaveShape(  ): any; 
getMargin(  ): any; 
setMargin( collisionMargin?: any ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btCollisionShape(  ): any; 
btCollisionShape(  ): any; 
getBoundingSphere( center?: btVector3, radius?: any ): void; 
getAngularMotionDisc(  ): any; 
getContactBreakingThreshold( defaultContactThresholdFactor?: any ): any; 
calculateTemporalAabb( curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3 ): void; 
isPolyhedral(  ): boolean; 
isConvex2d(  ): boolean; 
isConvex(  ): boolean; 
isNonMoving(  ): boolean; 
isConcave(  ): boolean; 
isCompound(  ): boolean; 
isSoftBody(  ): boolean; 
isInfinite(  ): boolean; 
getShapeType(  ): number; 
getAnisotropicRollingFrictionDirection(  ): btVector3; 
setUserPointer( userPtr?: void ): void; 
getUserPointer(  ): any; 
setUserIndex( index?: number ): void; 
getUserIndex(  ): number; 
serializeSingleShape( serializer?: btSerializer ): void; 
 

                } 

            }
        