
            declare namespace Ammo { 

                export class btGeneric6DofConstraint { 

                    constructor( rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean ); 

                    m_useSolveConstraintObsolete: boolean; 
m_objectType: number; 
m_frameInA: btTransform; 
m_frameInB: btTransform; 
m_jacLinear: btJacobianEntry; 
m_jacAng: btJacobianEntry; 
m_linearLimits: btTranslationalLimitMotor; 
m_angularLimits: btRotationalLimitMotor; 
m_timeStep: any; 
m_calculatedTransformA: btTransform; 
m_calculatedTransformB: btTransform; 
m_calculatedAxisAngleDiff: btVector3; 
m_calculatedAxis: btVector3; 
m_calculatedLinearDiff: btVector3; 
m_factA: any; 
m_factB: any; 
m_hasStaticBody: boolean; 
m_AnchorPos: btVector3; 
m_useLinearReferenceFrameA: boolean; 
m_useOffsetForConstraintFrame: boolean; 
m_flags: number; 
m_rbA: btRigidBody; 
m_rbB: btRigidBody; 
m_appliedImpulse: any; 
m_dbgDrawSize: any; 
m_jointFeedback: btJointFeedback; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
calculateTransforms( transA?: btTransform, transB?: btTransform ): void; 
calculateTransforms(  ): void; 
getCalculatedTransformA(  ): btTransform; 
getCalculatedTransformB(  ): btTransform; 
getFrameOffsetA(  ): btTransform; 
getFrameOffsetB(  ): btTransform; 
getFrameOffsetA(  ): btTransform; 
getFrameOffsetB(  ): btTransform; 
buildJacobian(  ): void; 
getInfo1( info?: btConstraintInfo1 ): void; 
getInfo1NonVirtual( info?: btConstraintInfo1 ): void; 
getInfo2( info?: btConstraintInfo2 ): void; 
getInfo2NonVirtual( info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3 ): void; 
updateRHS( timeStep?: any ): void; 
getAxis( axis_index?: number ): btVector3; 
getAngle( axis_index?: number ): any; 
getRelativePivotPosition( axis_index?: number ): any; 
setFrames( frameA?: btTransform, frameB?: btTransform ): void; 
testAngularLimitMotor( axis_index?: number ): boolean; 
setLinearLowerLimit( linearLower?: btVector3 ): void; 
getLinearLowerLimit( linearLower?: btVector3 ): void; 
setLinearUpperLimit( linearUpper?: btVector3 ): void; 
getLinearUpperLimit( linearUpper?: btVector3 ): void; 
setAngularLowerLimit( angularLower?: btVector3 ): void; 
getAngularLowerLimit( angularLower?: btVector3 ): void; 
setAngularUpperLimit( angularUpper?: btVector3 ): void; 
getAngularUpperLimit( angularUpper?: btVector3 ): void; 
getRotationalLimitMotor( index?: number ): btRotationalLimitMotor; 
getTranslationalLimitMotor(  ): btTranslationalLimitMotor; 
setLimit( axis?: number, lo?: any, hi?: any ): void; 
isLimited( limitIndex?: number ): boolean; 
calcAnchorPos( arg1?: any ): void; 
get_limit_motor_info2( limot?: btRotationalLimitMotor, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3, info?: btConstraintInfo2, row?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number ): number; 
getUseFrameOffset(  ): boolean; 
setUseFrameOffset( frameOffsetOnOff?: boolean ): void; 
setParam( num?: number, value?: any, axis?: number ): void; 
getParam( num?: number, axis?: number ): any; 
setAxis( axis1?: btVector3, axis2?: btVector3 ): void; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
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
buildLinearJacobian( jacLinear?: btJacobianEntry, normalWorld?: btVector3, pivotAInW?: btVector3, pivotBInW?: btVector3 ): void; 
buildAngularJacobian( jacAngular?: btJacobianEntry, jointAxisW?: btVector3 ): void; 
calculateLinearInfo(  ): void; 
calculateAngleInfo(  ): void; 
getMotorFactor( pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any ): any; 
 

                } 

            }
        