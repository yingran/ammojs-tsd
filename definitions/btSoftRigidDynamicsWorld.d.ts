
            declare namespace Ammo { 

                export class btSoftRigidDynamicsWorld { 

                    constructor( dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration, softBodySolver?: btSoftBodySolver ); 

                    m_softBodies: btSoftBodyArray; 
m_drawFlags: number; 
m_drawNodeTree: boolean; 
m_drawFaceTree: boolean; 
m_drawClusterTree: boolean; 
m_sbi: btSoftBodyWorldInfo; 
m_softBodySolver: btSoftBodySolver; 
m_ownsSolver: boolean; 
 

                    debugDrawWorld(  ): void; 
addSoftBody( body?: btSoftBody, collisionFilterGroup?: number, collisionFilterMask?: number ): void; 
removeSoftBody( body?: btSoftBody ): void; 
removeCollisionObject( collisionObject?: btCollisionObject ): void; 
getDrawFlags(  ): number; 
setDrawFlags( f?: number ): void; 
getWorldInfo(  ): btSoftBodyWorldInfo; 
getWorldInfo(  ): btSoftBodyWorldInfo; 
getWorldType(  ): btDynamicsWorldType; 
getSoftBodyArray(  ): btSoftBodyArray; 
getSoftBodyArray(  ): btSoftBodyArray; 
rayTest( rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any ): void; 
serialize( serializer?: btSerializer ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btDiscreteDynamicsWorld( dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration ): any; 
btDiscreteDynamicsWorld(  ): any; 
stepSimulation( timeStep?: any, maxSubSteps?: number, fixedTimeStep?: any ): number; 
synchronizeMotionStates(  ): void; 
synchronizeSingleMotionState( body?: btRigidBody ): void; 
addConstraint( constraint?: btTypedConstraint, disableCollisionsBetweenLinkedBodies?: boolean ): void; 
removeConstraint( constraint?: btTypedConstraint ): void; 
addAction( arg1?: btActionInterface ): void; 
removeAction( arg1?: btActionInterface ): void; 
getSimulationIslandManager(  ): btSimulationIslandManager; 
getSimulationIslandManager(  ): btSimulationIslandManager; 
getCollisionWorld(  ): btCollisionWorld; 
setGravity( gravity?: btVector3 ): void; 
getGravity(  ): btVector3; 
addCollisionObject( collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number ): void; 
addRigidBody( body?: btRigidBody ): void; 
addRigidBody( body?: btRigidBody, group?: number, mask?: number ): void; 
removeRigidBody( body?: btRigidBody ): void; 
debugDrawConstraint( constraint?: btTypedConstraint ): void; 
setConstraintSolver( solver?: btConstraintSolver ): void; 
getConstraintSolver(  ): btConstraintSolver; 
getNumConstraints(  ): number; 
getConstraint( index?: number ): btTypedConstraint; 
getConstraint( index?: number ): btTypedConstraint; 
clearForces(  ): void; 
applyGravity(  ): void; 
setNumTasks( numTasks?: number ): void; 
updateVehicles( timeStep?: any ): void; 
addVehicle( vehicle?: btActionInterface ): void; 
removeVehicle( vehicle?: btActionInterface ): void; 
addCharacter( character?: btActionInterface ): void; 
removeCharacter( character?: btActionInterface ): void; 
setSynchronizeAllMotionStates( synchronizeAll?: boolean ): void; 
getSynchronizeAllMotionStates(  ): boolean; 
setApplySpeculativeContactRestitution( enable?: boolean ): void; 
getApplySpeculativeContactRestitution(  ): boolean; 
setLatencyMotionStateInterpolation( latencyInterpolation?: boolean ): void; 
getLatencyMotionStateInterpolation(  ): boolean; 
btDynamicsWorld( dispatcher?: btDispatcher, broadphase?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration ): any; 
btDynamicsWorld(  ): any; 
setInternalTickCallback( cb?: btInternalTickCallback, worldUserInfo?: void, isPreTick?: boolean ): void; 
setWorldUserInfo( worldUserInfo?: void ): void; 
getWorldUserInfo(  ): any; 
getSolverInfo(  ): btContactSolverInfo; 
btCollisionWorld( dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration ): any; 
btCollisionWorld(  ): any; 
setBroadphase( pairCache?: btBroadphaseInterface ): void; 
getBroadphase(  ): btBroadphaseInterface; 
getBroadphase(  ): btBroadphaseInterface; 
getPairCache(  ): btOverlappingPairCache; 
getDispatcher(  ): btDispatcher; 
getDispatcher(  ): btDispatcher; 
updateSingleAabb( colObj?: btCollisionObject ): void; 
updateAabbs(  ): void; 
computeOverlappingPairs(  ): void; 
setDebugDrawer( debugDrawer?: btIDebugDraw ): void; 
getDebugDrawer(  ): btIDebugDraw; 
debugDrawObject( worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3 ): void; 
getNumCollisionObjects(  ): number; 
convexSweepTest( castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any ): void; 
contactTest( colObj?: btCollisionObject, resultCallback?: any ): void; 
contactPairTest( colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any ): void; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
performDiscreteCollisionDetection(  ): void; 
getDispatchInfo(  ): btDispatcherInfo; 
getDispatchInfo(  ): btDispatcherInfo; 
getForceUpdateAllAabbs(  ): boolean; 
setForceUpdateAllAabbs( forceUpdateAllAabbs?: boolean ): void; 
predictUnconstraintMotion( timeStep?: any ): void; 
internalSingleStepSimulation( timeStep?: any ): void; 
solveSoftBodiesConstraints( timeStep?: any ): void; 
serializeSoftBodies( serializer?: btSerializer ): void; 
integrateTransforms( timeStep?: any ): void; 
calculateSimulationIslands(  ): void; 
solveConstraints( solverInfo?: btContactSolverInfo ): void; 
updateActivationState( timeStep?: any ): void; 
updateActions( timeStep?: any ): void; 
startProfiling( timeStep?: any ): void; 
createPredictiveContacts( timeStep?: any ): void; 
saveKinematicState( timeStep?: any ): void; 
serializeRigidBodies( serializer?: btSerializer ): void; 
serializeDynamicsWorldInfo( serializer?: btSerializer ): void; 
serializeCollisionObjects( serializer?: btSerializer ): void; 
 

                } 

            }
        