
            declare namespace Ammo { 

                export class btSoftBody { 

                    constructor( worldInfo?: btSoftBodyWorldInfo, node_count?: number, x?: btVector3, m?: any ); 

                    m_collisionDisabledObjects: any; 
m_softBodySolver: btSoftBodySolver; 
m_cfg: any; 
m_sst: any; 
m_pose: any; 
m_tag: any; 
m_worldInfo: btSoftBodyWorldInfo; 
m_notes: any; 
m_nodes: any; 
m_links: any; 
m_faces: any; 
m_tetras: any; 
m_anchors: any; 
m_rcontacts: any; 
m_scontacts: any; 
m_joints: any; 
m_materials: any; 
m_timeacc: any; 
m_bounds: btVector3; 
m_bUpdateRtCst: boolean; 
m_ndbvt: btDbvt; 
m_fdbvt: btDbvt; 
m_cdbvt: btDbvt; 
m_clusters: any; 
m_clusterConnectivity: any; 
m_initialWorldTransform: btTransform; 
m_windVelocity: btVector3; 
m_restLengthScale: any; 
m_userIndexMapping: any; 
 

                    initDefaults(  ): void; 
getWorldInfo(  ): btSoftBodyWorldInfo; 
setCollisionShape( collisionShape?: btCollisionShape ): void; 
checkLink( node0?: number, node1?: number ): boolean; 
checkLink( node0?: any, node1?: any ): boolean; 
checkFace( node0?: number, node1?: number, node2?: number ): boolean; 
appendMaterial(  ): any; 
appendNote( text?: string, o?: btVector3, c?: btVector4, 0?: any, 0?: any, 0?: any ): void; 
appendNote( text?: string, o?: btVector3, feature?: any ): void; 
appendNote( text?: string, o?: btVector3, feature?: any ): void; 
appendNote( text?: string, o?: btVector3, feature?: any ): void; 
appendNode( x?: btVector3, m?: any ): void; 
appendLink( model?: number, mat?: any ): void; 
appendLink( node0?: number, node1?: number, mat?: any, bcheckexist?: boolean ): void; 
appendLink( node0?: any, node1?: any, mat?: any, bcheckexist?: boolean ): void; 
appendFace( model?: number, mat?: any ): void; 
appendFace( node0?: number, node1?: number, node2?: number, mat?: any ): void; 
appendTetra( model?: number, mat?: any ): void; 
appendTetra( node0?: number, node1?: number, node2?: number, node3?: number, mat?: any ): void; 
appendAnchor( node?: number, body?: btRigidBody, disableCollisionBetweenLinkedBodies?: boolean, influence?: any ): void; 
appendAnchor( node?: number, body?: btRigidBody, localPivot?: btVector3, disableCollisionBetweenLinkedBodies?: boolean, influence?: any ): void; 
appendLinearJoint( specs?: any, body0?: any, body1?: any ): void; 
appendLinearJoint( specs?: any, body?: any ): void; 
appendLinearJoint( specs?: any, body?: btSoftBody ): void; 
appendAngularJoint( specs?: any, body0?: any, body1?: any ): void; 
appendAngularJoint( specs?: any, body?: any ): void; 
appendAngularJoint( specs?: any, body?: btSoftBody ): void; 
addForce( force?: btVector3 ): void; 
addForce( force?: btVector3, node?: number ): void; 
addAeroForceToNode( windVelocity?: btVector3, nodeIndex?: number ): void; 
addAeroForceToFace( windVelocity?: btVector3, faceIndex?: number ): void; 
addVelocity( velocity?: btVector3 ): void; 
setVelocity( velocity?: btVector3 ): void; 
addVelocity( velocity?: btVector3, node?: number ): void; 
setMass( node?: number, mass?: any ): void; 
getMass( node?: number ): any; 
getTotalMass(  ): any; 
setTotalMass( mass?: any, fromfaces?: boolean ): void; 
setTotalDensity( density?: any ): void; 
setVolumeMass( mass?: any ): void; 
setVolumeDensity( density?: any ): void; 
transform( trs?: btTransform ): void; 
translate( trs?: btVector3 ): void; 
rotate( rot?: btQuaternion ): void; 
scale( scl?: btVector3 ): void; 
getRestLengthScale(  ): any; 
setRestLengthScale( restLength?: any ): void; 
setPose( bvolume?: boolean, bframe?: boolean ): void; 
resetLinkRestLengths(  ): void; 
getVolume(  ): any; 
clusterCount(  ): number; 
clusterCom( cluster?: number ): btVector3; 
generateBendingConstraints( distance?: number, mat?: any ): number; 
randomizeConstraints(  ): void; 
releaseCluster( index?: number ): void; 
releaseClusters(  ): void; 
generateClusters( k?: number, maxiterations?: number ): number; 
refine( ifn?: any, accurary?: any, cut?: boolean ): void; 
cutLink( node0?: number, node1?: number, position?: any ): boolean; 
cutLink( node0?: any, node1?: any, position?: any ): boolean; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, results?: any ): boolean; 
setSolver( preset?: any ): void; 
predictMotion( dt?: any ): void; 
solveConstraints(  ): void; 
staticSolve( iterations?: number ): void; 
integrateMotion(  ): void; 
defaultCollisionHandler( pcoWrap?: btCollisionObjectWrapper ): void; 
defaultCollisionHandler( psb?: btSoftBody ): void; 
setWindVelocity( velocity?: btVector3 ): void; 
getWindVelocity(  ): btVector3; 
setSoftBodySolver( softBodySolver?: btSoftBodySolver ): void; 
getSoftBodySolver(  ): btSoftBodySolver; 
getSoftBodySolver(  ): btSoftBodySolver; 
getAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
pointersToIndices(  ): void; 
indicesToPointers( map?: number ): void; 
rayTest( rayFrom?: btVector3, rayTo?: btVector3, mint?: any, feature?: any, index?: number, bcountonly?: boolean ): number; 
initializeFaceTree(  ): void; 
evaluateCom(  ): btVector3; 
checkContact( colObjWrap?: btCollisionObjectWrapper, x?: btVector3, margin?: any, cti?: btSoftBody::sCti ): boolean; 
updateNormals(  ): void; 
updateBounds(  ): void; 
updatePose(  ): void; 
updateConstants(  ): void; 
updateLinkConstants(  ): void; 
updateArea( averageArea?: boolean ): void; 
initializeClusters(  ): void; 
updateClusters(  ): void; 
cleanupClusters(  ): void; 
prepareClusters( iterations?: number ): void; 
solveClusters( sor?: any ): void; 
applyClusters( drift?: boolean ): void; 
dampClusters(  ): void; 
applyForces(  ): void; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
mergesSimulationIslands(  ): boolean; 
getAnisotropicFriction(  ): btVector3; 
setAnisotropicFriction( anisotropicFriction?: btVector3, frictionMode?: number ): void; 
hasAnisotropicFriction( frictionMode?: number ): boolean; 
setContactProcessingThreshold( contactProcessingThreshold?: any ): void; 
getContactProcessingThreshold(  ): any; 
isStaticObject(  ): boolean; 
isKinematicObject(  ): boolean; 
isStaticOrKinematicObject(  ): boolean; 
hasContactResponse(  ): boolean; 
btCollisionObject(  ): any; 
btCollisionObject(  ): any; 
getCollisionShape(  ): btCollisionShape; 
getCollisionShape(  ): btCollisionShape; 
setIgnoreCollisionCheck( co?: btCollisionObject, ignoreCollisionCheck?: boolean ): void; 
checkCollideWithOverride( co?: btCollisionObject ): boolean; 
internalGetExtensionPointer(  ): any; 
internalSetExtensionPointer( pointer?: void ): void; 
getActivationState(  ): number; 
setActivationState( newState?: number ): void; 
setDeactivationTime( time?: any ): void; 
getDeactivationTime(  ): any; 
forceActivationState( newState?: number ): void; 
activate( forceActivation?: boolean ): void; 
isActive(  ): boolean; 
setRestitution( rest?: any ): void; 
getRestitution(  ): any; 
setFriction( frict?: any ): void; 
getFriction(  ): any; 
setRollingFriction( frict?: any ): void; 
getRollingFriction(  ): any; 
getInternalType(  ): number; 
getWorldTransform(  ): btTransform; 
getWorldTransform(  ): btTransform; 
setWorldTransform( worldTrans?: btTransform ): void; 
getBroadphaseHandle(  ): btBroadphaseProxy; 
getBroadphaseHandle(  ): btBroadphaseProxy; 
setBroadphaseHandle( handle?: btBroadphaseProxy ): void; 
getInterpolationWorldTransform(  ): btTransform; 
getInterpolationWorldTransform(  ): btTransform; 
setInterpolationWorldTransform( trans?: btTransform ): void; 
setInterpolationLinearVelocity( linvel?: btVector3 ): void; 
setInterpolationAngularVelocity( angvel?: btVector3 ): void; 
getInterpolationLinearVelocity(  ): btVector3; 
getInterpolationAngularVelocity(  ): btVector3; 
getIslandTag(  ): number; 
setIslandTag( tag?: number ): void; 
getCompanionId(  ): number; 
setCompanionId( id?: number ): void; 
getHitFraction(  ): any; 
setHitFraction( hitFraction?: any ): void; 
getCollisionFlags(  ): number; 
setCollisionFlags( flags?: number ): void; 
getCcdSweptSphereRadius(  ): any; 
setCcdSweptSphereRadius( radius?: any ): void; 
getCcdMotionThreshold(  ): any; 
getCcdSquareMotionThreshold(  ): any; 
setCcdMotionThreshold( ccdMotionThreshold?: any ): void; 
getUserPointer(  ): any; 
getUserIndex(  ): number; 
setUserPointer( userPointer?: void ): void; 
setUserIndex( index?: number ): void; 
getUpdateRevisionInternal(  ): number; 
checkCollideWith( co?: btCollisionObject ): boolean; 
serializeSingleObject( serializer?: btSerializer ): void; 
 

                } 

            }
        