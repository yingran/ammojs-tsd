
            declare namespace Ammo { 

                export class btMinkowskiSumShape { 

                    constructor( shapeA?: btConvexShape, shapeB?: btConvexShape ); 

                    m_transA: btTransform; 
m_transB: btTransform; 
m_shapeA: btConvexShape; 
m_shapeB: btConvexShape; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
localGetSupportingVertexWithoutMargin( vec?: btVector3 ): btVector3; 
batchedUnitVectorGetSupportingVertexWithoutMargin( vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
setTransformA( transA?: btTransform ): void; 
setTransformB( transB?: btTransform ): void; 
getTransformA(  ): btTransform; 
GetTransformB(  ): btTransform; 
getMargin(  ): any; 
getShapeA(  ): btConvexShape; 
getShapeB(  ): btConvexShape; 
getName(  ): any; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConvexInternalShape(  ): any; 
localGetSupportingVertex( vec?: btVector3 ): btVector3; 
getImplicitShapeDimensions(  ): btVector3; 
setImplicitShapeDimensions( dimensions?: btVector3 ): void; 
setSafeMargin( minDimension?: any, defaultMarginMultiplier?: any ): void; 
setSafeMargin( halfExtents?: btVector3, defaultMarginMultiplier?: any ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getAabbSlow( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
getLocalScalingNV(  ): btVector3; 
setMargin( margin?: any ): void; 
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
        