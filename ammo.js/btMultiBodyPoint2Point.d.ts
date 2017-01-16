
            declare namespace Ammo { 

                export class btMultiBodyPoint2Point { 

                    constructor( bodyA?: btMultiBody, linkA?: number, bodyB?: btMultiBody, linkB?: number, pivotInA?: btVector3, pivotInB?: btVector3 ); 

                    m_rigidBodyA: btRigidBody; 
m_rigidBodyB: btRigidBody; 
m_pivotInA: btVector3; 
m_pivotInB: btVector3; 
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
getPivotInB(  ): btVector3; 
setPivotInB( pivotInB?: btVector3 ): void; 
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
        