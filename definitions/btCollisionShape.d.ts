
            declare namespace Ammo { 

                export class btCollisionShape { 

                    constructor(  ); 

                    m_shapeType: number; 
m_userPointer: any; 
m_userIndex: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
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
setLocalScaling( scaling?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
getName(  ): any; 
getShapeType(  ): number; 
getAnisotropicRollingFrictionDirection(  ): btVector3; 
setMargin( margin?: any ): void; 
getMargin(  ): any; 
setUserPointer( userPtr?: void ): void; 
getUserPointer(  ): any; 
setUserIndex( index?: number ): void; 
getUserIndex(  ): number; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
serializeSingleShape( serializer?: btSerializer ): void; 
 

                } 

            }
        