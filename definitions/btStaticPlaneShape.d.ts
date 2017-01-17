
            declare namespace Ammo { 

                export class btStaticPlaneShape { 

                    constructor( planeNormal?: btVector3, planeConstant?: any ); 

                    m_localAabbMin: btVector3; 
m_localAabbMax: btVector3; 
m_planeNormal: btVector3; 
m_planeConstant: any; 
m_localScaling: btVector3; 
m_collisionMargin: any; 
m_shapeType: number; 
m_userPointer: any; 
m_userIndex: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
processAllTriangles( callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
getPlaneNormal(  ): btVector3; 
getPlaneConstant(  ): any; 
getName(  ): any; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
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
        