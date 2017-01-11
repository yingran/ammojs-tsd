
            declare namespace Ammo { 

                export class btDiscreteDynamicsWorld { 

                    constructor(  ); 

                    m_sortedConstraints: any; 
m_solverIslandCallback: InplaceSolverIslandCallback; 
m_constraintSolver: btConstraintSolver; 
m_islandManager: btSimulationIslandManager; 
m_constraints: any; 
m_nonStaticRigidBodies: any; 
m_gravity: btVector3; 
m_localTime: btScalar; 
m_fixedTimeStep: btScalar; 
m_ownsIslandManager: boolean; 
m_ownsConstraintSolver: boolean; 
m_synchronizeAllMotionStates: boolean; 
m_applySpeculativeContactRestitution: boolean; 
m_actions: any; 
m_profileTimings: number; 
m_latencyMotionStateInterpolation: boolean; 
m_predictiveManifolds: any; 
m_internalTickCallback: btInternalTickCallback; 
m_internalPreTickCallback: btInternalTickCallback; 
m_worldUserInfo: any; 
m_solverInfo: btContactSolverInfo; 
m_collisionObjects: any; 
m_dispatcher1: btDispatcher; 
m_dispatchInfo: btDispatcherInfo; 
m_broadphasePairCache: btBroadphaseInterface; 
m_debugDrawer: btIDebugDraw; 
m_forceUpdateAllAabbs: boolean; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
stepSimulation( timeStep: btScalar, maxSubSteps: int, fixedTimeStep: btScalar ): number; 
synchronizeMotionStates(  ): void; 
synchronizeSingleMotionState( body: btRigidBody ): void; 
addConstraint( constraint: btTypedConstraint, disableCollisionsBetweenLinkedBodies: bool ): void; 
removeConstraint( constraint: btTypedConstraint ): void; 
addAction( *: btActionInterface ): void; 
removeAction( *: btActionInterface ): void; 
getSimulationIslandManager(  ): btSimulationIslandManager; 
getSimulationIslandManager(  ): btSimulationIslandManager; 
getCollisionWorld(  ): btCollisionWorld; 
setGravity( gravity: btVector3 ): void; 
getGravity(  ): btVector3; 
addCollisionObject( collisionObject: btCollisionObject, collisionFilterGroup: int, collisionFilterMask: int ): void; 
addRigidBody( body: btRigidBody ): void; 
addRigidBody( body: btRigidBody, group: short, mask: short ): void; 
removeRigidBody( body: btRigidBody ): void; 
removeCollisionObject( collisionObject: btCollisionObject ): void; 
debugDrawConstraint( constraint: btTypedConstraint ): void; 
debugDrawWorld(  ): void; 
setConstraintSolver( solver: btConstraintSolver ): void; 
getConstraintSolver(  ): btConstraintSolver; 
getNumConstraints(  ): number; 
getConstraint( index: int ): btTypedConstraint; 
getConstraint( index: int ): btTypedConstraint; 
getWorldType(  ): btDynamicsWorldType; 
clearForces(  ): void; 
applyGravity(  ): void; 
setNumTasks( numTasks: int ): void; 
updateVehicles( timeStep: btScalar ): void; 
addVehicle( vehicle: btActionInterface ): void; 
removeVehicle( vehicle: btActionInterface ): void; 
addCharacter( character: btActionInterface ): void; 
removeCharacter( character: btActionInterface ): void; 
setSynchronizeAllMotionStates( synchronizeAll: bool ): void; 
getSynchronizeAllMotionStates(  ): boolean; 
setApplySpeculativeContactRestitution( enable: bool ): void; 
getApplySpeculativeContactRestitution(  ): boolean; 
serialize( serializer: btSerializer ): void; 
setLatencyMotionStateInterpolation( latencyInterpolation: bool ): void; 
getLatencyMotionStateInterpolation(  ): boolean; 
btDynamicsWorld( dispatcher: btDispatcher, broadphase: btBroadphaseInterface, collisionConfiguration: btCollisionConfiguration ): any; 
btDynamicsWorld(  ): any; 
setInternalTickCallback( cb: btInternalTickCallback, worldUserInfo: void, isPreTick: bool ): void; 
setWorldUserInfo( worldUserInfo: void ): void; 
getWorldUserInfo(  ): any; 
getSolverInfo(  ): btContactSolverInfo; 
btCollisionWorld( dispatcher: btDispatcher, broadphasePairCache: btBroadphaseInterface, collisionConfiguration: btCollisionConfiguration ): any; 
btCollisionWorld(  ): any; 
setBroadphase( pairCache: btBroadphaseInterface ): void; 
getBroadphase(  ): btBroadphaseInterface; 
getBroadphase(  ): btBroadphaseInterface; 
getPairCache(  ): btOverlappingPairCache; 
getDispatcher(  ): btDispatcher; 
getDispatcher(  ): btDispatcher; 
updateSingleAabb( colObj: btCollisionObject ): void; 
updateAabbs(  ): void; 
computeOverlappingPairs(  ): void; 
setDebugDrawer( debugDrawer: btIDebugDraw ): void; 
getDebugDrawer(  ): btIDebugDraw; 
debugDrawObject( worldTransform: btTransform, shape: btCollisionShape, color: btVector3 ): void; 
getNumCollisionObjects(  ): number; 
rayTest( rayFromWorld: btVector3, rayToWorld: btVector3, resultCallback: RayResultCallback ): void; 
convexSweepTest( castShape: btConvexShape, from: btTransform, to: btTransform, resultCallback: ConvexResultCallback, allowedCcdPenetration: btScalar ): void; 
contactTest( colObj: btCollisionObject, resultCallback: ContactResultCallback ): void; 
contactPairTest( colObjA: btCollisionObject, colObjB: btCollisionObject, resultCallback: ContactResultCallback ): void; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
performDiscreteCollisionDetection(  ): void; 
getDispatchInfo(  ): btDispatcherInfo; 
getDispatchInfo(  ): btDispatcherInfo; 
getForceUpdateAllAabbs(  ): boolean; 
setForceUpdateAllAabbs( forceUpdateAllAabbs: bool ): void; 
predictUnconstraintMotion( timeStep: btScalar ): void; 
integrateTransforms( timeStep: btScalar ): void; 
calculateSimulationIslands(  ): void; 
solveConstraints( solverInfo: btContactSolverInfo ): void; 
updateActivationState( timeStep: btScalar ): void; 
updateActions( timeStep: btScalar ): void; 
startProfiling( timeStep: btScalar ): void; 
internalSingleStepSimulation( timeStep: btScalar ): void; 
createPredictiveContacts( timeStep: btScalar ): void; 
saveKinematicState( timeStep: btScalar ): void; 
serializeRigidBodies( serializer: btSerializer ): void; 
serializeDynamicsWorldInfo( serializer: btSerializer ): void; 
serializeCollisionObjects( serializer: btSerializer ): void; 
 

                } 

            }
        