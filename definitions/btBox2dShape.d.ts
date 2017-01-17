
            declare namespace Ammo { 

                export class btBox2dShape { 

                    constructor( boxHalfExtents?: btVector3 ); 

                    m_centroid: btVector3; 
m_vertices: btVector3; 
m_normals: btVector3; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getHalfExtentsWithMargin(  ): btVector3; 
getHalfExtentsWithoutMargin(  ): btVector3; 
localGetSupportingVertex( vec?: btVector3 ): btVector3; 
localGetSupportingVertexWithoutMargin( vec?: btVector3 ): btVector3; 
batchedUnitVectorGetSupportingVertexWithoutMargin( vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number ): void; 
setMargin( collisionMargin?: any ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
getVertexCount(  ): number; 
getNumVertices(  ): number; 
getVertices(  ): btVector3; 
getNormals(  ): btVector3; 
getPlane( planeNormal?: btVector3, planeSupport?: btVector3, i?: number ): void; 
getCentroid(  ): btVector3; 
getNumPlanes(  ): number; 
getNumEdges(  ): number; 
getVertex( i?: number, vtx?: btVector3 ): void; 
getPlaneEquation( plane?: btVector4, i?: number ): void; 
getEdge( i?: number, pa?: btVector3, pb?: btVector3 ): void; 
isInside( pt?: btVector3, tolerance?: any ): boolean; 
getName(  ): any; 
getNumPreferredPenetrationDirections(  ): number; 
getPreferredPenetrationDirection( index?: number, penetrationVector?: btVector3 ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btPolyhedralConvexShape(  ): any; 
btPolyhedralConvexShape(  ): any; 
initializePolyhedralFeatures( shiftVerticesByMargin?: number ): boolean; 
getConvexPolyhedron(  ): btConvexPolyhedron; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConvexInternalShape(  ): any; 
getImplicitShapeDimensions(  ): btVector3; 
setImplicitShapeDimensions( dimensions?: btVector3 ): void; 
setSafeMargin( minDimension?: any, defaultMarginMultiplier?: any ): void; 
setSafeMargin( halfExtents?: btVector3, defaultMarginMultiplier?: any ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getAabbSlow( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
getLocalScalingNV(  ): btVector3; 
getMargin(  ): any; 
getMarginNV(  ): any; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConvexShape(  ): any; 
btConvexShape(  ): any; 
localGetSupportVertexWithoutMarginNonVirtual( vec?: btVector3 ): btVector3; 
localGetSupportVertexNonVirtual( vec?: btVector3 ): btVector3; 
getMarginNonVirtual(  ): any; 
getAabbNonVirtual( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
project( trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3 ): void; 
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
        