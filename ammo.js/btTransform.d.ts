
            declare namespace Ammo { 

                export class btTransform { 

                    constructor( b?: btMatrix3x3, c?: btVector3 ); 

                    m_basis: btMatrix3x3; 
m_origin: btVector3; 
 

                    mult( t1?: btTransform, t2?: btTransform ): void; 
getBasis(  ): btMatrix3x3; 
getBasis(  ): btMatrix3x3; 
getOrigin(  ): btVector3; 
getOrigin(  ): btVector3; 
getRotation(  ): btQuaternion; 
setFromOpenGLMatrix( m?: any ): void; 
getOpenGLMatrix( m?: any ): void; 
setOrigin( origin?: btVector3 ): void; 
invXform( inVec?: btVector3 ): btVector3; 
setBasis( basis?: btMatrix3x3 ): void; 
setRotation( q?: btQuaternion ): void; 
setIdentity(  ): void; 
inverse(  ): btTransform; 
inverseTimes( t?: btTransform ): btTransform; 
serialize( dataOut?: btTransformData ): void; 
serializeFloat( dataOut?: btTransformFloatData ): void; 
deSerialize( dataIn?: btTransformData ): void; 
deSerializeDouble( dataIn?: btTransformDoubleData ): void; 
deSerializeFloat( dataIn?: btTransformFloatData ): void; 
 

                } 

            }
        