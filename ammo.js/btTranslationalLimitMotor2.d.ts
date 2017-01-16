
            declare namespace Ammo { 

                export class btTranslationalLimitMotor2 { 

                    constructor( other?: btTranslationalLimitMotor2 ); 

                    m_lowerLimit: btVector3; 
m_upperLimit: btVector3; 
m_bounce: btVector3; 
m_stopERP: btVector3; 
m_stopCFM: btVector3; 
m_motorERP: btVector3; 
m_motorCFM: btVector3; 
m_enableMotor: boolean; 
m_servoMotor: boolean; 
m_enableSpring: boolean; 
m_servoTarget: btVector3; 
m_springStiffness: btVector3; 
m_springStiffnessLimited: boolean; 
m_springDamping: btVector3; 
m_springDampingLimited: boolean; 
m_equilibriumPoint: btVector3; 
m_targetVelocity: btVector3; 
m_maxMotorForce: btVector3; 
m_currentLimitError: btVector3; 
m_currentLimitErrorHi: btVector3; 
m_currentLinearDiff: btVector3; 
m_currentLimit: number; 
 

                    isLimited( limitIndex?: number ): boolean; 
testLimitValue( limitIndex?: number, test_value?: any ): void; 
 

                } 

            }
        