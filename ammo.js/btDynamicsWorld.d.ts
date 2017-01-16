
            declare namespace Ammo { 

                export class btDynamicsWorld { 

                    constructor( dispatcher?: btDispatcher, broadphase?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration ); 

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
 

                    stepSimulation( timeStep?: any, maxSubSteps?: number, fixedTimeStep?: any ): number; 
debugDrawWorld(  ): void; 
addConstraint( constraint?: btTypedConstraint, disableCollisionsBetweenLinkedBodies?: boolean ): void; 
removeConstraint( constraint?: btTypedConstraint ): void; 
addAction( action?: btActionInterface ): void; 
removeAction( action?: btActionInterface ): void; 
setGravity( gravity?: btVector3 ): void; 
getGravity(  ): btVector3; 
synchronizeMotionStates(  ): void; 
addRigidBody( body?: btRigidBody ): void; 
addRigidBody( body?: btRigidBody, group?: number, mask?: number ): void; 
removeRigidBody( body?: btRigidBody ): void; 
setConstraintSolver( solver?: btConstraintSolver ): void; 
getConstraintSolver(  ): btConstraintSolver; 
getNumConstraints(  ): number; 
getConstraint( index?: number ): btTypedConstraint; 
getConstraint( index?: number ): btTypedConstraint; 
getWorldType(  ): btDynamicsWorldType; 
clearForces(  ): void; 
setInternalTickCallback( cb?: btInternalTickCallback, worldUserInfo?: void, isPreTick?: boolean ): void; 
setWorldUserInfo( worldUserInfo?: void ): void; 
getWorldUserInfo(  ): any; 
getSolverInfo(  ): btContactSolverInfo; 
addVehicle( vehicle?: btActionInterface ): void; 
removeVehicle( vehicle?: btActionInterface ): void; 
addCharacter( character?: btActionInterface ): void; 
removeCharacter( character?: btActionInterface ): void; 
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
addCollisionObject( collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number ): void; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
getCollisionObjectArray(  ): btCollisionObjectArray; 
removeCollisionObject( collisionObject?: btCollisionObject ): void; 
performDiscreteCollisionDetection(  ): void; 
getDispatchInfo(  ): btDispatcherInfo; 
getDispatchInfo(  ): btDispatcherInfo; 
getForceUpdateAllAabbs(  ): boolean; 
setForceUpdateAllAabbs( forceUpdateAllAabbs?: boolean ): void; 
serialize( serializer?: btSerializer ): void; 
 

                } 

            }
        