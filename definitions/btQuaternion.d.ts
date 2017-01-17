
            declare namespace Ammo { 

                export class btQuaternion { 

                    constructor( _x?: any, _y?: any, _z?: any, _w?: any ); 

                     

                    setRotation( axis?: btVector3, _angle?: any ): void; 
setEuler( yaw?: any, pitch?: any, roll?: any ): void; 
setEulerZYX( yaw?: any, pitch?: any, roll?: any ): void; 
dot( q?: btQuaternion ): any; 
length2(  ): any; 
length(  ): any; 
normalize(  ): btQuaternion; 
normalized(  ): btQuaternion; 
angle( q?: btQuaternion ): any; 
angleShortestPath( q?: btQuaternion ): any; 
getAngle(  ): any; 
getAngleShortestPath(  ): any; 
getAxis(  ): btVector3; 
inverse(  ): btQuaternion; 
farthest( qd?: btQuaternion ): btQuaternion; 
nearest( qd?: btQuaternion ): btQuaternion; 
slerp( q?: btQuaternion, t?: any ): btQuaternion; 
getW(  ): any; 
serialize( dataOut?: btQuaternionData ): void; 
deSerialize( dataIn?: btQuaternionData ): void; 
serializeFloat( dataOut?: btQuaternionFloatData ): void; 
deSerializeFloat( dataIn?: btQuaternionFloatData ): void; 
serializeDouble( dataOut?: btQuaternionDoubleData ): void; 
deSerializeDouble( dataIn?: btQuaternionDoubleData ): void; 
getX(  ): any; 
getY(  ): any; 
getZ(  ): any; 
setX( _x?: any ): void; 
setY( _y?: any ): void; 
setZ( _z?: any ): void; 
setW( _w?: any ): void; 
x(  ): any; 
y(  ): any; 
z(  ): any; 
w(  ): any; 
operator(  ): any; 
operator(  ): any; 
setValue( _x?: any, _y?: any, _z?: any ): void; 
setValue( _x?: any, _y?: any, _z?: any, _w?: any ): void; 
btQuadWord(  ): any; 
btQuadWord( _x?: any, _y?: any, _z?: any ): any; 
btQuadWord( _x?: any, _y?: any, _z?: any, _w?: any ): any; 
setMax( other?: btQuadWord ): void; 
setMin( other?: btQuadWord ): void; 
 

                } 

            }
        