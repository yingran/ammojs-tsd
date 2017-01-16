
            declare namespace Ammo { 

                export class btGeneric6DofConstraintData { 

                    constructor(  ); 

                    m_typeConstraintData: btTypedConstraintData; 
m_rbAFrame: btTransformFloatData; 
m_rbBFrame: btTransformFloatData; 
m_linearUpperLimit: btVector3FloatData; 
m_linearLowerLimit: btVector3FloatData; 
m_angularUpperLimit: btVector3FloatData; 
m_angularLowerLimit: btVector3FloatData; 
m_useLinearReferenceFrameA: number; 
m_useOffsetForConstraintFrame: number; 
 

                     

                } 

            }
        