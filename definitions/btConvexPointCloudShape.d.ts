
            declare namespace Ammo { 

                export class btConvexPointCloudShape { 

                    constructor( points?: btVector3, numPoints?: number, localScaling?: btVector3, computeAabb?: boolean ); 

                    m_unscaledPoints: btVector3; 
m_numPoints: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
setPoints( points?: btVector3, numPoints?: number, computeAabb?: boolean, localScaling?: btVector3, 1?: any, 1?: any ): void; 
getUnscaledPoints(  ): btVector3; 
getUnscaledPoints(  ): btVector3; 
getNumPoints(  ): number; 
getScaledPoint( index?: number ): btVector3; 
localGetSupportingVertex( vec?: btVector3 ): btVector3; 
localGetSupportingVertexWithoutMargin( vec?: btVector3 ): btVector3; 
batchedUnitVectorGetSupportingVertexWithoutMargin( vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number ): void; 
getName(  ): any; 
getNumVertices(  ): number; 
getNumEdges(  ): number; 
getEdge( i?: number, pa?: btVector3, pb?: btVector3 ): void; 
getVertex( i?: number, vtx?: btVector3 ): void; 
getNumPlanes(  ): number; 
getPlane( planeNormal?: btVector3, planeSupport?: btVector3, i?: number ): void; 
isInside( pt?: btVector3, tolerance?: any ): boolean; 
setLocalScaling( scaling?: btVector3 ): void; 
btPolyhedralConvexAabbCachingShape(  ): any; 
getNonvirtualAabb( trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
recalcLocalAabb(  ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btPolyhedralConvexShape(  ): any; 
btPolyhedralConvexShape(  ): any; 
initializePolyhedralFeatures( shiftVerticesByMargin?: number ): boolean; 
getConvexPolyhedron(  ): btConvexPolyhedron; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConvexInternalShape(  ): any; 
getImplicitShapeDimensions(  ): btVector3; 
setImplicitShapeDimensions( dimensions?: btVector3 ): void; 
setSafeMargin( minDimension?: any, defaultMarginMultiplier?: any ): void; 
setSafeMargin( halfExtents?: btVector3, defaultMarginMultiplier?: any ): void; 
getAabbSlow( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
getLocalScalingNV(  ): btVector3; 
setMargin( margin?: any ): void; 
getMargin(  ): any; 
getMarginNV(  ): any; 
getNumPreferredPenetrationDirections(  ): number; 
getPreferredPenetrationDirection( index?: number, penetrationVector?: btVector3 ): void; 
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
        