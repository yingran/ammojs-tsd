
            declare namespace Ammo { 

                export class btMatrix3x3 { 

                    constructor( xx?: any, xy?: any, xz?: any, yx?: any, yy?: any, yz?: any, zx?: any, zy?: any, zz?: any ); 

                    m_el: btVector3; 
 

                    getColumn( i?: number ): btVector3; 
getRow( i?: number ): btVector3; 
setFromOpenGLSubMatrix( m?: any ): void; 
setValue( xx?: any, xy?: any, xz?: any, yx?: any, yy?: any, yz?: any, zx?: any, zy?: any, zz?: any ): void; 
setRotation( q?: btQuaternion ): void; 
setEulerYPR( yaw?: any, pitch?: any, roll?: any ): void; 
setEulerZYX( eulerX?: any, eulerY?: any, eulerZ?: any ): void; 
setIdentity(  ): void; 
getOpenGLSubMatrix( m?: any ): void; 
getRotation( q?: btQuaternion ): void; 
getEulerYPR( yaw?: any, pitch?: any, roll?: any ): void; 
getEulerZYX( yaw?: any, pitch?: any, roll?: any, solution_number?: number ): void; 
scaled( s?: btVector3 ): btMatrix3x3; 
determinant(  ): any; 
adjoint(  ): btMatrix3x3; 
absolute(  ): btMatrix3x3; 
transpose(  ): btMatrix3x3; 
inverse(  ): btMatrix3x3; 
solve33( b?: btVector3 ): btVector3; 
transposeTimes( m?: btMatrix3x3 ): btMatrix3x3; 
timesTranspose( m?: btMatrix3x3 ): btMatrix3x3; 
tdotx( v?: btVector3 ): any; 
tdoty( v?: btVector3 ): any; 
tdotz( v?: btVector3 ): any; 
diagonalize( rot?: btMatrix3x3, threshold?: any, maxSteps?: number ): void; 
cofac( r1?: number, c1?: number, r2?: number, c2?: number ): any; 
serialize( dataOut?: btMatrix3x3Data ): void; 
serializeFloat( dataOut?: btMatrix3x3FloatData ): void; 
deSerialize( dataIn?: btMatrix3x3Data ): void; 
deSerializeFloat( dataIn?: btMatrix3x3FloatData ): void; 
deSerializeDouble( dataIn?: btMatrix3x3DoubleData ): void; 
 

                } 

            }
        