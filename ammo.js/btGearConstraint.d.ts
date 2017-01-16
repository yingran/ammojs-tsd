
            declare namespace Ammo { 

                export class btGearConstraint { 

                    constructor( rbA?: btRigidBody, rbB?: btRigidBody, axisInA?: btVector3, axisInB?: btVector3, ratio?: any ); 

                    m_axisInA: btVector3; 
m_axisInB: btVector3; 
m_useFrameA: boolean; 
m_ratio: any; 
m_rbA: btRigidBody; 
m_rbB: btRigidBody; 
m_appliedImpulse: any; 
m_dbgDrawSize: any; 
m_jointFeedback: btJointFeedback; 
 

                    getInfo1( info?: btConstraintInfo1 ): void; 
getInfo2( info?: btConstraintInfo2 ): void; 
setAxisA( axisA?: btVector3 ): void; 
setAxisB( axisB?: btVector3 ): void; 
setRatio( ratio?: any ): void; 
getAxisA(  ): btVector3; 
getAxisB(  ): btVector3; 
getRatio(  ): any; 
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
buildJacobian(  ): void; 
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
        