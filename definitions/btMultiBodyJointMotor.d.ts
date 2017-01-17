
            declare namespace Ammo { 

                export class btMultiBodyJointMotor { 

                    constructor( body?: btMultiBody, link?: number, linkDoF?: number, desiredVelocity?: any, maxMotorImpulse?: any ); 

                    m_desiredVelocity: any; 
m_bodyA: btMultiBody; 
m_bodyB: btMultiBody; 
m_linkA: number; 
m_linkB: number; 
m_numRows: number; 
m_jacSizeA: number; 
m_jacSizeBoth: number; 
m_posOffset: number; 
m_isUnilateral: boolean; 
m_numDofsFinalized: number; 
m_maxAppliedImpulse: any; 
m_data: any; 
 

                    finalizeMultiDof(  ): void; 
getIslandIdA(  ): number; 
getIslandIdB(  ): number; 
createConstraintRows( constraintRows?: btMultiBodyConstraintArray, data?: btMultiBodyJacobianData, infoGlobal?: btContactSolverInfo ): void; 
setVelocityTarget( velTarget?: any ): void; 
debugDraw( drawer?: btIDebugDraw ): void; 
btMultiBodyConstraint( bodyA?: btMultiBody, bodyB?: btMultiBody, linkA?: number, linkB?: number, numRows?: number, isUnilateral?: boolean ): any; 
btMultiBodyConstraint(  ): any; 
updateJacobianSizes(  ): void; 
allocateJacobiansMultiDof(  ): void; 
getNumRows(  ): number; 
getMultiBodyA(  ): btMultiBody; 
getMultiBodyB(  ): btMultiBody; 
internalSetAppliedImpulse( dof?: number, appliedImpulse?: any ): void; 
getAppliedImpulse( dof?: number ): any; 
getPosition( row?: number ): any; 
setPosition( row?: number, pos?: any ): void; 
isUnilateral(  ): boolean; 
jacobianA( row?: number ): any; 
jacobianA( row?: number ): any; 
jacobianB( row?: number ): any; 
jacobianB( row?: number ): any; 
getMaxAppliedImpulse(  ): any; 
setMaxAppliedImpulse( maxImp?: any ): void; 
 

                } 

            }
        