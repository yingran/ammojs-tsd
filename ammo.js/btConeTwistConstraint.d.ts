
            declare namespace Ammo { 

                export class btConeTwistConstraint { 

                    constructor( rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform ); 

                    m_jac: btJacobianEntry; 
m_rbAFrame: btTransform; 
m_rbBFrame: btTransform; 
m_limitSoftness: any; 
m_biasFactor: any; 
m_relaxationFactor: any; 
m_damping: any; 
m_swingSpan1: any; 
m_swingSpan2: any; 
m_twistSpan: any; 
m_fixThresh: any; 
m_swingAxis: btVector3; 
m_twistAxis: btVector3; 
m_kSwing: any; 
m_kTwist: any; 
m_twistLimitSign: any; 
m_swingCorrection: any; 
m_twistCorrection: any; 
m_twistAngle: any; 
m_accSwingLimitImpulse: any; 
m_accTwistLimitImpulse: any; 
m_angularOnly: boolean; 
m_solveTwistLimit: boolean; 
m_solveSwingLimit: boolean; 
m_useSolveConstraintObsolete: boolean; 
m_swingLimitRatio: any; 
m_twistLimitRatio: any; 
m_twistAxisA: btVector3; 
m_bMotorEnabled: boolean; 
m_bNormalizedMotorStrength: boolean; 
m_qTarget: btQuaternion; 
m_maxMotorImpulse: any; 
m_accMotorImpulse: btVector3; 
m_flags: number; 
m_linCFM: any; 
m_linERP: any; 
m_angCFM: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
buildJacobian(  ): void; 
getInfo1( info?: btConstraintInfo1 ): void; 
getInfo1NonVirtual( info?: btConstraintInfo1 ): void; 
getInfo2( info?: btConstraintInfo2 ): void; 
getInfo2NonVirtual( info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, invInertiaWorldA?: btMatrix3x3, invInertiaWorldB?: btMatrix3x3 ): void; 
solveConstraintObsolete( bodyA?: btSolverBody, bodyB?: btSolverBody, timeStep?: any ): void; 
updateRHS( timeStep?: any ): void; 
getRigidBodyA(  ): btRigidBody; 
getRigidBodyB(  ): btRigidBody; 
setAngularOnly( angularOnly?: boolean ): void; 
setLimit( limitIndex?: number, limitValue?: any ): void; 
setLimit( _swingSpan1?: any, _swingSpan2?: any, _twistSpan?: any, _softness?: any, _biasFactor?: any, _relaxationFactor?: any ): void; 
getAFrame(  ): btTransform; 
getBFrame(  ): btTransform; 
getSolveTwistLimit(  ): number; 
getSolveSwingLimit(  ): number; 
getTwistLimitSign(  ): any; 
calcAngleInfo(  ): void; 
calcAngleInfo2( transA?: btTransform, transB?: btTransform, invInertiaWorldA?: btMatrix3x3, invInertiaWorldB?: btMatrix3x3 ): void; 
getSwingSpan1(  ): any; 
getSwingSpan2(  ): any; 
getTwistSpan(  ): any; 
getTwistAngle(  ): any; 
isPastSwingLimit(  ): boolean; 
setDamping( damping?: any ): void; 
enableMotor( b?: boolean ): void; 
setMaxMotorImpulse( maxMotorImpulse?: any ): void; 
setMaxMotorImpulseNormalized( maxMotorImpulse?: any ): void; 
getFixThresh(  ): any; 
setFixThresh( fixThresh?: any ): void; 
setMotorTarget( q?: btQuaternion ): void; 
setMotorTargetInConstraintSpace( q?: btQuaternion ): void; 
GetPointForAngle( fAngleInRadians?: any, fLength?: any ): btVector3; 
setParam( num?: number, value?: any, axis?: number ): void; 
setFrames( frameA?: btTransform, frameB?: btTransform ): void; 
getFrameOffsetA(  ): btTransform; 
getFrameOffsetB(  ): btTransform; 
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
init(  ): void; 
computeConeLimitInfo( qCone?: btQuaternion, swingAngle?: any, vSwingAxis?: btVector3, swingLimit?: any ): void; 
computeTwistLimitInfo( qTwist?: btQuaternion, twistAngle?: any, vTwistAxis?: btVector3 ): void; 
adjustSwingAxisToUseEllipseNormal( vSwingAxis?: btVector3 ): void; 
getMotorFactor( pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any ): any; 
 

                } 

            }
        