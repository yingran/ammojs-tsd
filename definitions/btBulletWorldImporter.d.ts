
            declare namespace Ammo { 

                export class btBulletWorldImporter { 

                    constructor( world?: btDynamicsWorld ); 

                     

                    loadFile( fileName?: string, preSwapFilenameOut?: string ): boolean; 
loadFileFromMemory( memoryBuffer?: string, len?: number ): boolean; 
loadFileFromMemory( file?: bParse::btBulletFile ): boolean; 
convertAllObjects( file?: bParse::btBulletFile ): boolean; 
btWorldImporter( world?: btDynamicsWorld ): any; 
btWorldImporter(  ): any; 
deleteAllData(  ): void; 
setVerboseMode( verboseMode?: number ): void; 
getVerboseMode(  ): number; 
getNumCollisionShapes(  ): number; 
getCollisionShapeByIndex( index?: number ): btCollisionShape; 
getNumRigidBodies(  ): number; 
getRigidBodyByIndex( index?: number ): btCollisionObject; 
getNumConstraints(  ): number; 
getConstraintByIndex( index?: number ): btTypedConstraint; 
getNumBvhs(  ): number; 
getBvhByIndex( index?: number ): btOptimizedBvh; 
getNumTriangleInfoMaps(  ): number; 
getTriangleInfoMapByIndex( index?: number ): btTriangleInfoMap; 
getCollisionShapeByName( name?: string ): btCollisionShape; 
getRigidBodyByName( name?: string ): btRigidBody; 
getConstraintByName( name?: string ): btTypedConstraint; 
getNameForPointer( ptr?: void ): any; 
setDynamicsWorldInfo( gravity?: btVector3, solverInfo?: btContactSolverInfo ): void; 
createRigidBody( isDynamic?: boolean, mass?: any, startTransform?: btTransform, shape?: btCollisionShape, bodyName?: string ): btRigidBody; 
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
createGimpactShape( trimesh?: btStridingMeshInterface ): btGImpactMeshShape; 
createStridingMeshInterfaceData( interfaceData?: btStridingMeshInterfaceData ): btStridingMeshInterfaceData; 
createConvexHullShape(  ): btConvexHullShape; 
createCompoundShape(  ): btCompoundShape; 
createScaledTrangleMeshShape( meshShape?: btBvhTriangleMeshShape, localScalingbtBvhTriangleMeshShape?: btVector3 ): btScaledBvhTriangleMeshShape; 
createMultiSphereShape( positions?: btVector3, radi?: any, numSpheres?: number ): btMultiSphereShape; 
createMeshInterface( meshData?: btStridingMeshInterfaceData ): btTriangleIndexVertexArray; 
createOptimizedBvh(  ): btOptimizedBvh; 
createTriangleInfoMap(  ): btTriangleInfoMap; 
createPoint2PointConstraint( rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3 ): btPoint2PointConstraint; 
createPoint2PointConstraint( rbA?: btRigidBody, pivotInA?: btVector3 ): btPoint2PointConstraint; 
createHingeConstraint( rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform, useReferenceFrameA?: boolean ): btHingeConstraint; 
createHingeConstraint( rbA?: btRigidBody, rbAFrame?: btTransform, useReferenceFrameA?: boolean ): btHingeConstraint; 
createConeTwistConstraint( rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform ): btConeTwistConstraint; 
createConeTwistConstraint( rbA?: btRigidBody, rbAFrame?: btTransform ): btConeTwistConstraint; 
createGeneric6DofConstraint( rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean ): btGeneric6DofConstraint; 
createGeneric6DofConstraint( rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameB?: boolean ): btGeneric6DofConstraint; 
createGeneric6DofSpringConstraint( rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean ): btGeneric6DofSpringConstraint; 
createGeneric6DofSpring2Constraint( rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, rotateOrder?: number ): btGeneric6DofSpring2Constraint; 
createSliderConstraint( rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean ): btSliderConstraint; 
createSliderConstraint( rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameA?: boolean ): btSliderConstraint; 
createGearConstraint( rbA?: btRigidBody, rbB?: btRigidBody, axisInA?: btVector3, axisInB?: btVector3, ratio?: any ): btGearConstraint; 
 

                } 

            }
        