
            declare namespace Ammo { 

                export class btMultiBodySolverConstraint { 

                    constructor(  ); 

                    m_deltaVelAindex: number; 
m_jacAindex: number; 
m_deltaVelBindex: number; 
m_jacBindex: number; 
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
m_multiBodyA: btMultiBody; 
m_linkA: number; 
m_solverBodyIdB: number; 
m_multiBodyB: btMultiBody; 
m_linkB: number; 
m_orgConstraint: btMultiBodyConstraint; 
m_orgDofIndex: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
 

                } 

            }
        