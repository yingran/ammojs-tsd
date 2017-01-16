
            declare namespace Ammo { 

                export class btCompoundShape { 

                    constructor( enableDynamicAabbTree?: boolean, initialChildCapacity?: number ); 

                    m_localScaling: btVector3; 
m_shapeType: number; 
m_userPointer: any; 
m_userIndex: number; 
m_children: any; 
m_localAabbMin: btVector3; 
m_localAabbMax: btVector3; 
m_dynamicAabbTree: btDbvt; 
m_updateRevision: number; 
m_collisionMargin: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
addChildShape( localTransform?: btTransform, shape?: btCollisionShape ): void; 
removeChildShape( shape?: btCollisionShape ): void; 
removeChildShapeByIndex( childShapeindex?: number ): void; 
getNumChildShapes(  ): number; 
getChildShape( index?: number ): btCollisionShape; 
getChildShape( index?: number ): btCollisionShape; 
getChildTransform( index?: number ): btTransform; 
getChildTransform( index?: number ): btTransform; 
updateChildTransform( childIndex?: number, newChildTransform?: btTransform, shouldRecalculateLocalAabb?: boolean ): void; 
getChildList(  ): btCompoundShapeChild; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
recalculateLocalAabb(  ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
setMargin( margin?: any ): void; 
getMargin(  ): any; 
getName(  ): any; 
getDynamicAabbTree(  ): btDbvt; 
getDynamicAabbTree(  ): btDbvt; 
createAabbTreeFromChildren(  ): void; 
calculatePrincipalAxisTransform( masses?: any, principal?: btTransform, inertia?: btVector3 ): void; 
getUpdateRevision(  ): number; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
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
        