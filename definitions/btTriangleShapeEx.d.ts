
            declare namespace Ammo { 

                export class btTriangleShapeEx { 

                    constructor( p0?: btVector3, p1?: btVector3, p2?: btVector3 ); 

                     

                    getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
applyTransform( t?: btTransform ): void; 
buildTriPlane( plane?: btVector4 ): void; 
overlap_test_conservative( other?: btTriangleShapeEx ): boolean; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getNumVertices(  ): number; 
getVertexPtr( index?: number ): btVector3; 
getVertexPtr( index?: number ): btVector3; 
getVertex( index?: number, vert?: btVector3 ): void; 
getNumEdges(  ): number; 
getEdge( i?: number, pa?: btVector3, pb?: btVector3 ): void; 
localGetSupportingVertexWithoutMargin( dir?: btVector3 ): btVector3; 
batchedUnitVectorGetSupportingVertexWithoutMargin( vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number ): void; 
btTriangleShape(  ): any; 
btTriangleShape( p0?: btVector3, p1?: btVector3, p2?: btVector3 ): any; 
getPlane( planeNormal?: btVector3, planeSupport?: btVector3, i?: number ): void; 
getNumPlanes(  ): number; 
calcNormal( normal?: btVector3 ): void; 
getPlaneEquation( i?: number, planeNormal?: btVector3, planeSupport?: btVector3 ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
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
localGetSupportingVertex( vec?: btVector3 ): btVector3; 
getImplicitShapeDimensions(  ): btVector3; 
setImplicitShapeDimensions( dimensions?: btVector3 ): void; 
setSafeMargin( minDimension?: any, defaultMarginMultiplier?: any ): void; 
setSafeMargin( halfExtents?: btVector3, defaultMarginMultiplier?: any ): void; 
getAabbSlow( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
getLocalScalingNV(  ): btVector3; 
setMargin( margin?: any ): void; 
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
        