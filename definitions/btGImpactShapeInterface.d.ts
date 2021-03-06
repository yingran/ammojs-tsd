
            declare namespace Ammo { 

                export class btGImpactShapeInterface { 

                    constructor(  ); 

                    m_localAABB: btAABB; 
m_needs_update: boolean; 
localScaling: btVector3; 
m_box_set: btGImpactBoxSet; 
m_collisionMargin: any; 
m_shapeType: number; 
m_userPointer: any; 
m_userIndex: number; 
 

                    updateBound(  ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
postUpdate(  ): void; 
getLocalBox(  ): btAABB; 
getShapeType(  ): number; 
setLocalScaling( scaling?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
setMargin( margin?: any ): void; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, resultCallback?: btCollisionWorld::RayResultCallback ): void; 
processAllTriangles( callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
processAllTrianglesRay( arg1?: btTriangleCallback, arg2?: btVector3, arg3?: btVector3 ): void; 
getGImpactShapeType(  ): any; 
getBoxSet(  ): btGImpactBoxSet; 
hasBoxSet(  ): boolean; 
getPrimitiveManager(  ): btPrimitiveManagerBase; 
getNumChildShapes(  ): number; 
childrenHasTransform(  ): boolean; 
needsRetrieveTriangles(  ): boolean; 
needsRetrieveTetrahedrons(  ): boolean; 
getBulletTriangle( prim_index?: number, triangle?: btTriangleShapeEx ): void; 
getBulletTetrahedron( prim_index?: number, tetrahedron?: btTetrahedronShapeEx ): void; 
lockChildShapes(  ): void; 
unlockChildShapes(  ): void; 
getPrimitiveTriangle( index?: number, triangle?: btPrimitiveTriangle ): void; 
getChildAabb( child_index?: number, t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getChildShape( index?: number ): btCollisionShape; 
getChildShape( index?: number ): btCollisionShape; 
getChildTransform( index?: number ): btTransform; 
setChildTransform( index?: number, transform?: btTransform ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConcaveShape(  ): any; 
btConcaveShape(  ): any; 
getMargin(  ): any; 
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
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
getName(  ): any; 
getShapeType(  ): number; 
getAnisotropicRollingFrictionDirection(  ): btVector3; 
setUserPointer( userPtr?: void ): void; 
getUserPointer(  ): any; 
setUserIndex( index?: number ): void; 
getUserIndex(  ): number; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
serializeSingleShape( serializer?: btSerializer ): void; 
calcLocalAABB(  ): void; 
 

                } 

            }
        