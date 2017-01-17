
            declare namespace Ammo { 

                export class btGImpactMeshShape { 

                    constructor( meshInterface?: btStridingMeshInterface ); 

                    m_mesh_parts: any; 
m_localAABB: btAABB; 
m_needs_update: boolean; 
localScaling: btVector3; 
m_box_set: btGImpactBoxSet; 
m_collisionMargin: any; 
m_shapeType: number; 
m_userPointer: any; 
m_userIndex: number; 
m_meshInterface: btStridingMeshInterface; 
 

                    getMeshInterface(  ): btStridingMeshInterface; 
getMeshInterface(  ): btStridingMeshInterface; 
getMeshPartCount(  ): number; 
getMeshPart( index?: number ): btGImpactMeshShapePart; 
getMeshPart( index?: number ): btGImpactMeshShapePart; 
setLocalScaling( scaling?: btVector3 ): void; 
setMargin( margin?: any ): void; 
postUpdate(  ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
getPrimitiveManager(  ): btPrimitiveManagerBase; 
getNumChildShapes(  ): number; 
childrenHasTransform(  ): boolean; 
needsRetrieveTriangles(  ): boolean; 
needsRetrieveTetrahedrons(  ): boolean; 
getBulletTriangle( prim_index?: number, triangle?: btTriangleShapeEx ): void; 
getBulletTetrahedron( prim_index?: number, tetrahedron?: btTetrahedronShapeEx ): void; 
lockChildShapes(  ): void; 
unlockChildShapes(  ): void; 
getChildAabb( child_index?: number, t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getChildShape( index?: number ): btCollisionShape; 
getChildShape( index?: number ): btCollisionShape; 
getChildTransform( index?: number ): btTransform; 
setChildTransform( index?: number, transform?: btTransform ): void; 
getGImpactShapeType(  ): any; 
getName(  ): any; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, resultCallback?: btCollisionWorld::RayResultCallback ): void; 
processAllTriangles( callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
processAllTrianglesRay( callback?: btTriangleCallback, rayFrom?: btVector3, rayTo?: btVector3 ): void; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
btGImpactShapeInterface(  ): any; 
updateBound(  ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getLocalBox(  ): btAABB; 
getShapeType(  ): number; 
getLocalScaling(  ): btVector3; 
getBoxSet(  ): btGImpactBoxSet; 
hasBoxSet(  ): boolean; 
getPrimitiveTriangle( index?: number, triangle?: btPrimitiveTriangle ): void; 
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
getShapeType(  ): number; 
getAnisotropicRollingFrictionDirection(  ): btVector3; 
setUserPointer( userPtr?: void ): void; 
getUserPointer(  ): any; 
setUserIndex( index?: number ): void; 
getUserIndex(  ): number; 
serializeSingleShape( serializer?: btSerializer ): void; 
buildMeshParts( meshInterface?: btStridingMeshInterface ): void; 
calcLocalAABB(  ): void; 
 

                } 

            }
        