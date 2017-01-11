
            declare namespace Ammo { 

                export class btVector3 { 

                    constructor( _x: btScalar, _y: btScalar, _z: btScalar ); 

                    m_floats: btScalar; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
op_add( v: btVector3 ): btVector3; 
op_sub( v: btVector3 ): btVector3; 
dot( v: btVector3 ): btScalar; 
length2(  ): btScalar; 
length(  ): btScalar; 
norm(  ): btScalar; 
distance2( v: btVector3 ): btScalar; 
distance( v: btVector3 ): btScalar; 
safeNormalize(  ): btVector3; 
normalize(  ): btVector3; 
normalized(  ): btVector3; 
rotate( wAxis: btVector3, angle: btScalar ): btVector3; 
angle( v: btVector3 ): btScalar; 
absolute(  ): btVector3; 
cross( v: btVector3 ): btVector3; 
triple( v1: btVector3, v2: btVector3 ): btScalar; 
minAxis(  ): number; 
maxAxis(  ): number; 
furthestAxis(  ): number; 
closestAxis(  ): number; 
setInterpolate3( v0: btVector3, v1: btVector3, rt: btScalar ): void; 
lerp( v: btVector3, t: btScalar ): btVector3; 
op_mul( v: btVector3 ): btVector3; 
getX(  ): btScalar; 
getY(  ): btScalar; 
getZ(  ): btScalar; 
setX( _x: btScalar ): void; 
setY( _y: btScalar ): void; 
setZ( _z: btScalar ): void; 
setW( _w: btScalar ): void; 
x(  ): btScalar; 
y(  ): btScalar; 
z(  ): btScalar; 
w(  ): btScalar; 
operator(  ): any; 
operator(  ): any; 
setMax( other: btVector3 ): void; 
setMin( other: btVector3 ): void; 
setValue( _x: btScalar, _y: btScalar, _z: btScalar ): void; 
getSkewSymmetricMatrix( v0: btVector3, v1: btVector3, v2: btVector3 ): void; 
setZero(  ): void; 
isZero(  ): boolean; 
fuzzyZero(  ): boolean; 
serialize( dataOut: btVector3Data ): void; 
deSerialize( dataIn: btVector3Data ): void; 
serializeFloat( dataOut: btVector3FloatData ): void; 
deSerializeFloat( dataIn: btVector3FloatData ): void; 
serializeDouble( dataOut: btVector3DoubleData ): void; 
deSerializeDouble( dataIn: btVector3DoubleData ): void; 
maxDot( array: btVector3, array_count: long, dotOut: btScalar ): any; 
minDot( array: btVector3, array_count: long, dotOut: btScalar ): any; 
dot3( v0: btVector3, v1: btVector3, v2: btVector3 ): btVector3; 
 

                } 

            }
        