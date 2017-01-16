
            declare namespace Ammo { 

                export class GrahamVector3 { 

                    constructor( org?: btVector3, orgIndex?: number ); 

                    m_angle: any; 
m_orgIndex: number; 
m_floats: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btVector3(  ): any; 
btVector3( _x?: any, _y?: any, _z?: any ): any; 
op_add( v?: btVector3 ): btVector3; 
op_sub( v?: btVector3 ): btVector3; 
dot( v?: btVector3 ): any; 
length2(  ): any; 
length(  ): any; 
norm(  ): any; 
distance2( v?: btVector3 ): any; 
distance( v?: btVector3 ): any; 
safeNormalize(  ): btVector3; 
normalize(  ): btVector3; 
normalized(  ): btVector3; 
rotate( wAxis?: btVector3, angle?: any ): btVector3; 
angle( v?: btVector3 ): any; 
absolute(  ): btVector3; 
cross( v?: btVector3 ): btVector3; 
triple( v1?: btVector3, v2?: btVector3 ): any; 
minAxis(  ): number; 
maxAxis(  ): number; 
furthestAxis(  ): number; 
closestAxis(  ): number; 
setInterpolate3( v0?: btVector3, v1?: btVector3, rt?: any ): void; 
lerp( v?: btVector3, t?: any ): btVector3; 
op_mul( v?: btVector3 ): btVector3; 
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
setMax( other?: btVector3 ): void; 
setMin( other?: btVector3 ): void; 
setValue( _x?: any, _y?: any, _z?: any ): void; 
getSkewSymmetricMatrix( v0?: btVector3, v1?: btVector3, v2?: btVector3 ): void; 
setZero(  ): void; 
isZero(  ): boolean; 
fuzzyZero(  ): boolean; 
serialize( dataOut?: btVector3Data ): void; 
deSerialize( dataIn?: btVector3Data ): void; 
serializeFloat( dataOut?: btVector3FloatData ): void; 
deSerializeFloat( dataIn?: btVector3FloatData ): void; 
serializeDouble( dataOut?: btVector3DoubleData ): void; 
deSerializeDouble( dataIn?: btVector3DoubleData ): void; 
maxDot( array?: btVector3, array_count?: number, dotOut?: any ): number; 
minDot( array?: btVector3, array_count?: number, dotOut?: any ): number; 
dot3( v0?: btVector3, v1?: btVector3, v2?: btVector3 ): btVector3; 
 

                } 

            }
        