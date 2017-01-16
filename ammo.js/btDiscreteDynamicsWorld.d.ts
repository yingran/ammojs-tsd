
            declare namespace Ammo { 

                export class btDiscreteDynamicsWorld { 

                    constructor( dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration ); 

                    m_sortedConstraints: any; 
m_solverIslandCallback: any; 
m_constraintSolver: btConstraintSolver; 
m_islandManager: btSimulationIslandManager; 
m_constraints: any; 
m_nonStaticRigidBodies: any; 
m_gravity: btVector3; 
m_localTime: any; 
m_fixedTimeStep: any; 
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
removeCollisionObject( collisionObject?: btCollisionObject ): void; 
debugDrawConstraint( constraint?: btTypedConstraint ): void; 
debugDrawWorld(  ): void; 
setConstraintSolver( solver?: btConstraintSolver ): void; 
getConstraintSolver(  ): btConstraintSolver; 
getNumConstraints(  ): number; 
getConstraint( index?: number ): btTypedConstraint; 
getConstraint( index?: number ): btTypedConstraint; 
getWorldType(  ): btDynamicsWorldType; 
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
serialize( serializer?: btSerializer ): void; 
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
rayTest( rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any ): void; 
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
integrateTransforms( timeStep?: any ): void; 
calculateSimulationIslands(  ): void; 
solveConstraints( solverInfo?: btContactSolverInfo ): void; 
updateActivationState( timeStep?: any ): void; 
updateActions( timeStep?: any ): void; 
startProfiling( timeStep?: any ): void; 
internalSingleStepSimulation( timeStep?: any ): void; 
createPredictiveContacts( timeStep?: any ): void; 
saveKinematicState( timeStep?: any ): void; 
serializeRigidBodies( serializer?: btSerializer ): void; 
serializeDynamicsWorldInfo( serializer?: btSerializer ): void; 
serializeCollisionObjects( serializer?: btSerializer ): void; 
 

                } 

            }
        