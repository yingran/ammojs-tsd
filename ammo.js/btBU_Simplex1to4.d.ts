
            declare namespace Ammo { 

                export class btBU_Simplex1to4 { 

                    constructor( pt0?: btVector3, pt1?: btVector3, pt2?: btVector3, pt3?: btVector3 ); 

                    m_numVertices: number; 
m_vertices: btVector3; 
m_polyhedron: btConvexPolyhedron; 
m_localScaling: btVector3; 
m_implicitShapeDimensions: btVector3; 
m_collisionMargin: any; 
m_padding: any; 
m_shapeType: number; 
m_userPointer: any; 
m_userIndex: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
reset(  ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
addVertex( pt?: btVector3 ): void; 
getNumVertices(  ): number; 
getNumEdges(  ): number; 
getEdge( i?: number, pa?: btVector3, pb?: btVector3 ): void; 
getVertex( i?: number, vtx?: btVector3 ): void; 
getNumPlanes(  ): number; 
getPlane( planeNormal?: btVector3, planeSupport?: btVector3, i?: number ): void; 
getIndex( i?: number ): number; 
isInside( pt?: btVector3, tolerance?: any ): boolean; 
getName(  ): any; 
btPolyhedralConvexAabbCachingShape(  ): any; 
getNonvirtualAabb( trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
recalcLocalAabb(  ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btPolyhedralConvexShape(  ): any; 
btPolyhedralConvexShape(  ): any; 
initializePolyhedralFeatures( shiftVerticesByMargin?: number ): boolean; 
getConvexPolyhedron(  ): btConvexPolyhedron; 
localGetSupportingVertexWithoutMargin( vec?: btVector3 ): btVector3; 
batchedUnitVectorGetSupportingVertexWithoutMargin( vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConvexInternalShape(  ): any; 
localGetSupportingVertex( vec?: btVector3 ): btVector3; 
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
        