
            declare namespace Ammo { 

                export class btPoint2PointConstraint { 

                    constructor( rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3 ); 

                    m_useSolveConstraintObsolete: boolean; 
m_setting: btConstraintSetting; 
m_objectType: number; 
m_jac: btJacobianEntry; 
m_pivotInA: btVector3; 
m_pivotInB: btVector3; 
m_flags: number; 
m_erp: any; 
m_cfm: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
buildJacobian(  ): void; 
getInfo1( info?: btConstraintInfo1 ): void; 
getInfo1NonVirtual( info?: btConstraintInfo1 ): void; 
getInfo2( info?: btConstraintInfo2 ): void; 
getInfo2NonVirtual( info?: btConstraintInfo2, body0_trans?: btTransform, body1_trans?: btTransform ): void; 
updateRHS( timeStep?: any ): void; 
setPivotA( pivotA?: btVector3 ): void; 
setPivotB( pivotB?: btVector3 ): void; 
getPivotInA(  ): btVector3; 
getPivotInB(  ): btVector3; 
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
        