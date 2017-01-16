
            declare namespace Ammo { 

                export class btMultiBodyConstraint { 

                    constructor( bodyA?: btMultiBody, bodyB?: btMultiBody, linkA?: number, linkB?: number, numRows?: number, isUnilateral?: boolean ); 

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
 

                    updateJacobianSizes(  ): void; 
allocateJacobiansMultiDof(  ): void; 
finalizeMultiDof(  ): void; 
getIslandIdA(  ): number; 
getIslandIdB(  ): number; 
createConstraintRows( constraintRows?: btMultiBodyConstraintArray, data?: btMultiBodyJacobianData, infoGlobal?: btContactSolverInfo ): void; 
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
debugDraw( drawer?: btIDebugDraw ): void; 
applyDeltaVee( data?: btMultiBodyJacobianData, delta_vee?: any, impulse?: any, velocityIndex?: number, ndof?: number ): void; 
fillMultiBodyConstraint( solverConstraint?: btMultiBodySolverConstraint, data?: btMultiBodyJacobianData, jacOrgA?: any, jacOrgB?: any, contactNormalOnB?: btVector3, posAworld?: btVector3, posBworld?: btVector3, posError?: any, infoGlobal?: btContactSolverInfo, lowerLimit?: any, upperLimit?: any, relaxation?: any, isFriction?: boolean, desiredVelocity?: any, cfmSlip?: any ): any; 
 

                } 

            }
        