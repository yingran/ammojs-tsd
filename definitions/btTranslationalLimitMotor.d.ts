
            declare namespace Ammo { 

                export class btTranslationalLimitMotor { 

                    constructor( other?: btTranslationalLimitMotor ); 

                    m_lowerLimit: btVector3; 
m_upperLimit: btVector3; 
m_accumulatedImpulse: btVector3; 
m_enableMotor: boolean; 
m_targetVelocity: btVector3; 
m_maxMotorForce: btVector3; 
m_currentLimitError: btVector3; 
m_currentLinearDiff: btVector3; 
m_currentLimit: number; 
m_limitSoftness: any; 
m_damping: any; 
m_restitution: any; 
m_normalCFM: btVector3; 
m_stopERP: btVector3; 
m_stopCFM: btVector3; 
 

                    isLimited( limitIndex?: number ): boolean; 
needApplyForce( limitIndex?: number ): boolean; 
testLimitValue( limitIndex?: number, test_value?: any ): number; 
solveLinearAxis( timeStep?: any, jacDiagABInv?: any, body1?: btRigidBody, pointInA?: btVector3, body2?: btRigidBody, pointInB?: btVector3, limit_index?: number, axis_normal_on_a?: btVector3, anchorPos?: btVector3 ): any; 
 

                } 

            }
        