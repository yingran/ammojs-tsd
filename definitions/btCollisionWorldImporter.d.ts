
            declare namespace Ammo { 

                export class btCollisionWorldImporter { 

                    constructor( world?: btCollisionWorld ); 

                    m_collisionWorld: btCollisionWorld; 
m_verboseMode: number; 
m_allocatedCollisionShapes: any; 
m_allocatedRigidBodies: any; 
m_allocatedBvhs: any; 
m_allocatedTriangleInfoMaps: any; 
m_allocatedTriangleIndexArrays: any; 
m_allocatedbtStridingMeshInterfaceDatas: any; 
m_allocatedCollisionObjects: any; 
m_allocatedNames: any; 
m_indexArrays: any; 
m_shortIndexArrays: any; 
m_charIndexArrays: any; 
m_floatVertexArrays: any; 
m_doubleVertexArrays: any; 
m_bvhMap: any; 
m_timMap: any; 
m_nameShapeMap: any; 
m_nameColObjMap: any; 
m_objectNameMap: any; 
m_shapeMap: any; 
m_bodyMap: any; 
 

                    convertAllObjects( arrays?: btBulletSerializedArrays ): boolean; 
deleteAllData(  ): void; 
setVerboseMode( verboseMode?: number ): void; 
getVerboseMode(  ): number; 
getNumCollisionShapes(  ): number; 
getCollisionShapeByIndex( index?: number ): btCollisionShape; 
getNumRigidBodies(  ): number; 
getRigidBodyByIndex( index?: number ): btCollisionObject; 
getNumConstraints(  ): number; 
getNumBvhs(  ): number; 
getBvhByIndex( index?: number ): btOptimizedBvh; 
getNumTriangleInfoMaps(  ): number; 
getTriangleInfoMapByIndex( index?: number ): btTriangleInfoMap; 
getCollisionShapeByName( name?: string ): btCollisionShape; 
getCollisionObjectByName( name?: string ): btCollisionObject; 
getNameForPointer( ptr?: void ): any; 
createCollisionObject( startTransform?: btTransform, shape?: btCollisionShape, bodyName?: string ): btCollisionObject; 
createPlaneShape( planeNormal?: btVector3, planeConstant?: any ): btCollisionShape; 
createBoxShape( halfExtents?: btVector3 ): btCollisionShape; 
createSphereShape( radius?: any ): btCollisionShape; 
createCapsuleShapeX( radius?: any, height?: any ): btCollisionShape; 
createCapsuleShapeY( radius?: any, height?: any ): btCollisionShape; 
createCapsuleShapeZ( radius?: any, height?: any ): btCollisionShape; 
createCylinderShapeX( radius?: any, height?: any ): btCollisionShape; 
createCylinderShapeY( radius?: any, height?: any ): btCollisionShape; 
createCylinderShapeZ( radius?: any, height?: any ): btCollisionShape; 
createConeShapeX( radius?: any, height?: any ): btCollisionShape; 
createConeShapeY( radius?: any, height?: any ): btCollisionShape; 
createConeShapeZ( radius?: any, height?: any ): btCollisionShape; 
createTriangleMeshContainer(  ): btTriangleIndexVertexArray; 
createBvhTriangleMeshShape( trimesh?: btStridingMeshInterface, bvh?: btOptimizedBvh ): btBvhTriangleMeshShape; 
createConvexTriangleMeshShape( trimesh?: btStridingMeshInterface ): btCollisionShape; 
createStridingMeshInterfaceData( interfaceData?: btStridingMeshInterfaceData ): btStridingMeshInterfaceData; 
createConvexHullShape(  ): btConvexHullShape; 
createCompoundShape(  ): btCompoundShape; 
createScaledTrangleMeshShape( meshShape?: btBvhTriangleMeshShape, localScalingbtBvhTriangleMeshShape?: btVector3 ): btScaledBvhTriangleMeshShape; 
createMultiSphereShape( positions?: btVector3, radi?: any, numSpheres?: number ): btMultiSphereShape; 
createMeshInterface( meshData?: btStridingMeshInterfaceData ): btTriangleIndexVertexArray; 
createOptimizedBvh(  ): btOptimizedBvh; 
createTriangleInfoMap(  ): btTriangleInfoMap; 
duplicateName( name?: string ): any; 
convertCollisionShape( shapeData?: btCollisionShapeData ): btCollisionShape; 
 

                } 

            }
        