
            declare namespace Ammo { 

                export class btRotationalLimitMotor2 { 

                    constructor( limot?: btRotationalLimitMotor2 ); 

                    m_loLimit: any; 
m_hiLimit: any; 
m_bounce: any; 
m_stopERP: any; 
m_stopCFM: any; 
m_motorERP: any; 
m_motorCFM: any; 
m_enableMotor: boolean; 
m_targetVelocity: any; 
m_maxMotorForce: any; 
m_servoMotor: boolean; 
m_servoTarget: any; 
m_enableSpring: boolean; 
m_springStiffness: any; 
m_springStiffnessLimited: boolean; 
m_springDamping: any; 
m_springDampingLimited: boolean; 
m_equilibriumPoint: any; 
m_currentLimitError: any; 
m_currentLimitErrorHi: any; 
m_currentPosition: any; 
m_currentLimit: number; 
 

                    isLimited(  ): boolean; 
testLimitValue( test_value?: any ): void; 
 

                } 

            }
        