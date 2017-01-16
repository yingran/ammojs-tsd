
            declare namespace Ammo { 

                export class btRotationalLimitMotor { 

                    constructor( limot?: btRotationalLimitMotor ); 

                    m_loLimit: any; 
m_hiLimit: any; 
m_targetVelocity: any; 
m_maxMotorForce: any; 
m_maxLimitForce: any; 
m_damping: any; 
m_limitSoftness: any; 
m_normalCFM: any; 
m_stopERP: any; 
m_stopCFM: any; 
m_bounce: any; 
m_enableMotor: boolean; 
m_currentLimitError: any; 
m_currentPosition: any; 
m_currentLimit: number; 
m_accumulatedImpulse: any; 
 

                    isLimited(  ): boolean; 
needApplyTorques(  ): boolean; 
testLimitValue( test_value?: any ): number; 
solveAngularLimits( timeStep?: any, axis?: btVector3, jacDiagABInv?: any, body0?: btRigidBody, body1?: btRigidBody ): any; 
 

                } 

            }
        