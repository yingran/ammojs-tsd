
            declare namespace Ammo { 

                export class btSolverConstraint { 

                    constructor(  ); 

                    m_relpos1CrossNormal: btVector3; 
m_contactNormal1: btVector3; 
m_relpos2CrossNormal: btVector3; 
m_contactNormal2: btVector3; 
m_angularComponentA: btVector3; 
m_angularComponentB: btVector3; 
m_appliedPushImpulse: btSimdScalar; 
m_appliedImpulse: btSimdScalar; 
m_friction: any; 
m_jacDiagABInv: any; 
m_rhs: any; 
m_cfm: any; 
m_lowerLimit: any; 
m_upperLimit: any; 
m_rhsPenetration: any; 
m_overrideNumSolverIterations: number; 
m_frictionIndex: number; 
m_solverBodyIdA: number; 
m_solverBodyIdB: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
 

                } 

            }
        