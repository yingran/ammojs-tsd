
            declare namespace Ammo { 

                export class btMultiBodyConstraintSolver { 

                    constructor(  ); 

                    m_multiBodyNonContactConstraints: btMultiBodyConstraintArray; 
m_multiBodyNormalContactConstraints: btMultiBodyConstraintArray; 
m_multiBodyFrictionContactConstraints: btMultiBodyConstraintArray; 
m_data: btMultiBodyJacobianData; 
m_tmpMultiBodyConstraints: btMultiBodyConstraint; 
m_tmpNumMultiBodyConstraints: number; 
m_tmpSolverBodyPool: any; 
m_tmpSolverContactConstraintPool: btConstraintArray; 
m_tmpSolverNonContactConstraintPool: btConstraintArray; 
m_tmpSolverContactFrictionConstraintPool: btConstraintArray; 
m_tmpSolverContactRollingFrictionConstraintPool: btConstraintArray; 
m_orderTmpConstraintPool: any; 
m_orderNonContactConstraintPool: any; 
m_orderFrictionConstraintPool: any; 
m_tmpConstraintSizesPool: any; 
m_maxOverrideNumSolverIterations: number; 
m_fixedBodyId: number; 
m_resolveSingleConstraintRowGeneric: btSingleConstraintRowSolver; 
m_resolveSingleConstraintRowLowerLimit: btSingleConstraintRowSolver; 
m_btSeed2: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
solveGroup( bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher ): any; 
solveGroupCacheFriendlyFinish( bodies?: btCollisionObject, numBodies?: number, infoGlobal?: btContactSolverInfo ): any; 
solveMultiBodyGroup( bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, multiBodyConstraints?: btMultiBodyConstraint, numMultiBodyConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btSequentialImpulseConstraintSolver(  ): any; 
btSequentialImpulseConstraintSolver(  ): any; 
reset(  ): void; 
btRand2(  ): number; 
btRandInt2( n?: number ): number; 
setRandSeed( seed?: number ): void; 
getRandSeed(  ): number; 
getSolverType(  ): btConstraintSolverType; 
getActiveConstraintRowSolverGeneric(  ): btSingleConstraintRowSolver; 
setConstraintRowSolverGeneric( rowSolver?: btSingleConstraintRowSolver ): void; 
getActiveConstraintRowSolverLowerLimit(  ): btSingleConstraintRowSolver; 
setConstraintRowSolverLowerLimit( rowSolver?: btSingleConstraintRowSolver ): void; 
getScalarConstraintRowSolverGeneric(  ): btSingleConstraintRowSolver; 
getSSE2ConstraintRowSolverGeneric(  ): btSingleConstraintRowSolver; 
getSSE4_1ConstraintRowSolverGeneric(  ): btSingleConstraintRowSolver; 
getScalarConstraintRowSolverLowerLimit(  ): btSingleConstraintRowSolver; 
getSSE2ConstraintRowSolverLowerLimit(  ): btSingleConstraintRowSolver; 
getSSE4_1ConstraintRowSolverLowerLimit(  ): btSingleConstraintRowSolver; 
btConstraintSolver(  ): any; 
prepareSolve( int?: any, int?: any ): void; 
allSolved( arg1?: btContactSolverInfo, arg2?: btIDebugDraw ): void; 
resolveSingleConstraintRowGeneric( c?: btMultiBodySolverConstraint ): void; 
resolveSingleConstraintRowGenericMultiBody( c?: btMultiBodySolverConstraint ): void; 
convertContacts( manifoldPtr?: btPersistentManifold, numManifolds?: number, infoGlobal?: btContactSolverInfo ): void; 
addMultiBodyFrictionConstraint( normalAxis?: btVector3, manifold?: btPersistentManifold, frictionIndex?: number, cp?: btManifoldPoint, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, infoGlobal?: btContactSolverInfo, desiredVelocity?: any, cfmSlip?: any ): btMultiBodySolverConstraint; 
setupMultiBodyJointLimitConstraint( constraintRow?: btMultiBodySolverConstraint, jacA?: any, jacB?: any, penetration?: any, combinedFrictionCoeff?: any, combinedRestitutionCoeff?: any, infoGlobal?: btContactSolverInfo ): void; 
setupMultiBodyContactConstraint( solverConstraint?: btMultiBodySolverConstraint, contactNormal?: btVector3, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo, relaxation?: any, isFriction?: boolean, desiredVelocity?: any, cfmSlip?: any ): void; 
convertMultiBodyContact( manifold?: btPersistentManifold, infoGlobal?: btContactSolverInfo ): void; 
solveGroupCacheFriendlySetup( bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw ): any; 
solveSingleIteration( iteration?: number, bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw ): any; 
applyDeltaVee( deltaV?: any, impulse?: any, velocityIndex?: number, ndof?: number ): void; 
writeBackSolverBodyToMultiBody( constraint?: btMultiBodySolverConstraint, deltaTime?: any ): void; 
setupFrictionConstraint( solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any ): void; 
setupRollingFrictionConstraint( solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any ): void; 
addFrictionConstraint( normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any ): btSolverConstraint; 
addRollingFrictionConstraint( normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any ): btSolverConstraint; 
setupContactConstraint( solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo, relaxation?: any, rel_pos1?: btVector3, rel_pos2?: btVector3 ): void; 
setFrictionConstraintImpulse( solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo ): void; 
restitutionCurve( rel_vel?: any, restitution?: any ): any; 
convertContact( manifold?: btPersistentManifold, infoGlobal?: btContactSolverInfo ): void; 
resolveSplitPenetrationSIMD( bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint ): void; 
resolveSplitPenetrationImpulseCacheFriendly( bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint ): void; 
getOrInitSolverBody( body?: btCollisionObject, timeStep?: any ): number; 
initSolverBody( solverBody?: btSolverBody, collisionObject?: btCollisionObject, timeStep?: any ): void; 
resolveSingleConstraintRowGeneric( bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint ): btSimdScalar; 
resolveSingleConstraintRowGenericSIMD( bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint ): btSimdScalar; 
resolveSingleConstraintRowLowerLimit( bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint ): btSimdScalar; 
resolveSingleConstraintRowLowerLimitSIMD( bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint ): btSimdScalar; 
solveGroupCacheFriendlySplitImpulseIterations( bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw ): void; 
solveGroupCacheFriendlyIterations( bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw ): any; 
 

                } 

            }
        