
            declare namespace Ammo { 

                export class btCapsuleShapeZ { 

                    constructor( radius?: any, height?: any ); 

                     

                    getName(  ): any; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btCapsuleShape( radius?: any, height?: any ): any; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
localGetSupportingVertexWithoutMargin( vec?: btVector3 ): btVector3; 
batchedUnitVectorGetSupportingVertexWithoutMargin( vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number ): void; 
setMargin( collisionMargin?: any ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getUpAxis(  ): number; 
getRadius(  ): any; 
getHalfHeight(  ): any; 
setLocalScaling( scaling?: btVector3 ): void; 
getAnisotropicRollingFrictionDirection(  ): btVector3; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
deSerializeFloat( dataBuffer?: btCapsuleShapeData ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConvexInternalShape(  ): any; 
localGetSupportingVertex( vec?: btVector3 ): btVector3; 
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
getNumPreferredPenetrationDirections(  ): number; 
getPreferredPenetrationDirection( index?: number, penetrationVector?: btVector3 ): void; 
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
setUserPointer( userPtr?: void ): void; 
getUserPointer(  ): any; 
setUserIndex( index?: number ): void; 
getUserIndex(  ): number; 
serializeSingleShape( serializer?: btSerializer ): void; 
 

                } 

            }
        