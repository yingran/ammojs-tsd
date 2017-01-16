
            declare namespace Ammo { 

                export class btHingeConstraint { 

                    constructor( rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3, axisInA?: btVector3, axisInB?: btVector3, useReferenceFrameA?: boolean ); 

                    m_jac: btJacobianEntry; 
m_jacAng: btJacobianEntry; 
m_rbAFrame: btTransform; 
m_rbBFrame: btTransform; 
m_motorTargetVelocity: any; 
m_maxMotorImpulse: any; 
m_limit: btAngularLimit; 
m_kHinge: any; 
m_accLimitImpulse: any; 
m_hingeAngle: any; 
m_referenceSign: any; 
m_angularOnly: boolean; 
m_enableAngularMotor: boolean; 
m_useSolveConstraintObsolete: boolean; 
m_useOffsetForConstraintFrame: boolean; 
m_useReferenceFrameA: boolean; 
m_accMotorImpulse: any; 
m_flags: number; 
m_normalCFM: any; 
m_normalERP: any; 
m_stopCFM: any; 
m_stopERP: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
buildJacobian(  ): void; 
getInfo1( info?: btConstraintInfo1 ): void; 
getInfo1NonVirtual( info?: btConstraintInfo1 ): void; 
getInfo2( info?: btConstraintInfo2 ): void; 
getInfo2NonVirtual( info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3 ): void; 
getInfo2Internal( info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3 ): void; 
getInfo2InternalUsingFrameOffset( info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3 ): void; 
updateRHS( timeStep?: any ): void; 
getRigidBodyA(  ): btRigidBody; 
getRigidBodyB(  ): btRigidBody; 
getRigidBodyA(  ): btRigidBody; 
getRigidBodyB(  ): btRigidBody; 
getFrameOffsetA(  ): btTransform; 
getFrameOffsetB(  ): btTransform; 
setFrames( frameA?: btTransform, frameB?: btTransform ): void; 
setAngularOnly( angularOnly?: boolean ): void; 
enableAngularMotor( enableMotor?: boolean, targetVelocity?: any, maxMotorImpulse?: any ): void; 
enableMotor( enableMotor?: boolean ): void; 
setMaxMotorImpulse( maxMotorImpulse?: any ): void; 
setMotorTarget( qAinB?: btQuaternion, dt?: any ): void; 
setMotorTarget( targetAngle?: any, dt?: any ): void; 
setLimit( low?: any, high?: any, _softness?: any, _biasFactor?: any, _relaxationFactor?: any ): void; 
setAxis( axisInA?: btVector3 ): void; 
hasLimit(  ): boolean; 
getLowerLimit(  ): any; 
getUpperLimit(  ): any; 
getHingeAngle(  ): any; 
getHingeAngle( transA?: btTransform, transB?: btTransform ): any; 
testLimit( transA?: btTransform, transB?: btTransform ): void; 
getAFrame(  ): btTransform; 
getBFrame(  ): btTransform; 
getAFrame(  ): btTransform; 
getBFrame(  ): btTransform; 
getSolveLimit(  ): number; 
getLimitSign(  ): any; 
getAngularOnly(  ): boolean; 
getEnableAngularMotor(  ): boolean; 
getMotorTargetVelosity(  ): any; 
getMaxMotorImpulse(  ): any; 
getUseFrameOffset(  ): boolean; 
setUseFrameOffset( frameOffsetOnOff?: boolean ): void; 
setParam( num?: number, value?: any, axis?: number ): void; 
getParam( num?: number, axis?: number ): any; 
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
 

                } 

            }
        