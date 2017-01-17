
            declare namespace Ammo { 

                export class btGeneric6DofSpring2Constraint { 

                    constructor( rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, rotOrder?: any ); 

                    m_frameInA: btTransform; 
m_frameInB: btTransform; 
m_jacLinear: btJacobianEntry; 
m_jacAng: btJacobianEntry; 
m_linearLimits: btTranslationalLimitMotor2; 
m_angularLimits: btRotationalLimitMotor2; 
m_rotateOrder: any; 
m_calculatedTransformA: btTransform; 
m_calculatedTransformB: btTransform; 
m_calculatedAxisAngleDiff: btVector3; 
m_calculatedAxis: btVector3; 
m_calculatedLinearDiff: btVector3; 
m_factA: any; 
m_factB: any; 
m_hasStaticBody: boolean; 
m_flags: number; 
m_rbA: btRigidBody; 
m_rbB: btRigidBody; 
m_appliedImpulse: any; 
m_dbgDrawSize: any; 
m_jointFeedback: btJointFeedback; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
buildJacobian(  ): void; 
getInfo1( info?: btConstraintInfo1 ): void; 
getInfo2( info?: btConstraintInfo2 ): void; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
getRotationalLimitMotor( index?: number ): btRotationalLimitMotor2; 
getTranslationalLimitMotor(  ): btTranslationalLimitMotor2; 
calculateTransforms( transA?: btTransform, transB?: btTransform ): void; 
calculateTransforms(  ): void; 
getCalculatedTransformA(  ): btTransform; 
getCalculatedTransformB(  ): btTransform; 
getFrameOffsetA(  ): btTransform; 
getFrameOffsetB(  ): btTransform; 
getFrameOffsetA(  ): btTransform; 
getFrameOffsetB(  ): btTransform; 
getAxis( axis_index?: number ): btVector3; 
getAngle( axis_index?: number ): any; 
getRelativePivotPosition( axis_index?: number ): any; 
setFrames( frameA?: btTransform, frameB?: btTransform ): void; 
setLinearLowerLimit( linearLower?: btVector3 ): void; 
getLinearLowerLimit( linearLower?: btVector3 ): void; 
setLinearUpperLimit( linearUpper?: btVector3 ): void; 
getLinearUpperLimit( linearUpper?: btVector3 ): void; 
setAngularLowerLimit( angularLower?: btVector3 ): void; 
setAngularLowerLimitReversed( angularLower?: btVector3 ): void; 
getAngularLowerLimit( angularLower?: btVector3 ): void; 
getAngularLowerLimitReversed( angularLower?: btVector3 ): void; 
setAngularUpperLimit( angularUpper?: btVector3 ): void; 
setAngularUpperLimitReversed( angularUpper?: btVector3 ): void; 
getAngularUpperLimit( angularUpper?: btVector3 ): void; 
getAngularUpperLimitReversed( angularUpper?: btVector3 ): void; 
setLimit( axis?: number, lo?: any, hi?: any ): void; 
setLimitReversed( axis?: number, lo?: any, hi?: any ): void; 
isLimited( limitIndex?: number ): boolean; 
setRotationOrder( order?: any ): void; 
getRotationOrder(  ): any; 
setAxis( axis1?: btVector3, axis2?: btVector3 ): void; 
setBounce( index?: number, bounce?: any ): void; 
enableMotor( index?: number, onOff?: boolean ): void; 
setServo( index?: number, onOff?: boolean ): void; 
setTargetVelocity( index?: number, velocity?: any ): void; 
setServoTarget( index?: number, target?: any ): void; 
setMaxMotorForce( index?: number, force?: any ): void; 
enableSpring( index?: number, onOff?: boolean ): void; 
setStiffness( index?: number, stiffness?: any, limitIfNeeded?: boolean ): void; 
setDamping( index?: number, damping?: any, limitIfNeeded?: boolean ): void; 
setEquilibriumPoint(  ): void; 
setEquilibriumPoint( index?: number ): void; 
setEquilibriumPoint( index?: number, val?: any ): void; 
setParam( num?: number, value?: any, axis?: number ): void; 
getParam( num?: number, axis?: number ): any; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btTypedConstraint(  ): any; 
btTypedConstraint( type?: btTypedConstraintType, rbA?: btRigidBody ): any; 
btTypedConstraint( type?: btTypedConstraintType, rbA?: btRigidBody, rbB?: btRigidBody ): any; 
getOverrideNumSolverIterations(  ): number; 
setOverrideNumSolverIterations( overideNumIterations?: number ): void; 
setupSolverConstraint( ca?: btConstraintArray, solverBodyA?: number, solverBodyB?: number, timeStep?: any ): void; 
internalSetAppliedImpulse( appliedImpulse?: any ): void; 
internalGetAppliedImpulse(  ): any; 
getBreakingImpulseThreshold(  ): any; 
setBreakingImpulseThreshold( threshold?: any ): void; 
isEnabled(  ): boolean; 
setEnabled( enabled?: boolean ): void; 
solveConstraintObsolete( arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any ): void; 
getRigidBodyA(  ): btRigidBody; 
getRigidBodyB(  ): btRigidBody; 
getRigidBodyA(  ): btRigidBody; 
getRigidBodyB(  ): btRigidBody; 
getUserConstraintType(  ): number; 
setUserConstraintType( userConstraintType?: number ): void; 
setUserConstraintId( uid?: number ): void; 
getUserConstraintId(  ): number; 
setUserConstraintPtr( ptr?: void ): void; 
getUserConstraintPtr(  ): any; 
setJointFeedback( jointFeedback?: btJointFeedback ): void; 
getJointFeedback(  ): btJointFeedback; 
getJointFeedback(  ): btJointFeedback; 
getUid(  ): number; 
needsFeedback(  ): boolean; 
enableFeedback( needsFeedback?: boolean ): void; 
getAppliedImpulse(  ): any; 
getConstraintType(  ): btTypedConstraintType; 
setDbgDrawSize( dbgDrawSize?: any ): void; 
getDbgDrawSize(  ): any; 
btTypedObject( objectType?: number ): any; 
getObjectType(  ): number; 
setAngularLimits( info?: btConstraintInfo2, row_offset?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3 ): number; 
setLinearLimits( info?: btConstraintInfo2, row?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3 ): number; 
calculateLinearInfo(  ): void; 
calculateAngleInfo(  ): void; 
testAngularLimitMotor( axis_index?: number ): void; 
calculateJacobi( limot?: btRotationalLimitMotor2, transA?: btTransform, transB?: btTransform, info?: btConstraintInfo2, srow?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number ): void; 
get_limit_motor_info2( limot?: btRotationalLimitMotor2, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3, info?: btConstraintInfo2, row?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number ): number; 
getMotorFactor( pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any ): any; 
 

                } 

            }
        