
            declare namespace Ammo { 

                export class btHeightfieldTerrainShape { 

                    constructor( heightStickWidth?: number, heightStickLength?: number, heightfieldData?: void, heightScale?: any, minHeight?: any, maxHeight?: any, upAxis?: number, heightDataType?: any, flipQuadEdges?: boolean ); 

                    m_localAabbMin: btVector3; 
m_localAabbMax: btVector3; 
m_localOrigin: btVector3; 
m_heightStickWidth: number; 
m_heightStickLength: number; 
m_minHeight: any; 
m_maxHeight: any; 
m_width: any; 
m_length: any; 
m_heightScale: any; 
m_heightDataType: any; 
m_flipQuadEdges: boolean; 
m_useDiamondSubdivision: boolean; 
m_useZigzagSubdivision: boolean; 
m_upAxis: number; 
m_localScaling: btVector3; 
m_collisionMargin: any; 
m_shapeType: number; 
m_userPointer: any; 
m_userIndex: number; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
setUseDiamondSubdivision( useDiamondSubdivision?: boolean ): void; 
setUseZigzagSubdivision( useZigzagSubdivision?: boolean ): void; 
getAabb( t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
processAllTriangles( callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
calculateLocalInertia( mass?: any, inertia?: btVector3 ): void; 
setLocalScaling( scaling?: btVector3 ): void; 
getLocalScaling(  ): btVector3; 
getName(  ): any; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btConcaveShape(  ): any; 
btConcaveShape(  ): any; 
getMargin(  ): any; 
setMargin( collisionMargin?: any ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btCollisionShape(  ): any; 
btCollisionShape(  ): any; 
getBoundingSphere( center?: btVector3, radius?: any ): void; 
getAngularMotionDisc(  ): any; 
getContactBreakingThreshold( defaultContactThresholdFactor?: any ): any; 
calculateTemporalAabb( curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3 ): void; 
isPolyhedral(  ): boolean; 
isConvex2d(  ): boolean; 
isConvex(  ): boolean; 
isNonMoving(  ): boolean; 
isConcave(  ): boolean; 
isCompound(  ): boolean; 
isSoftBody(  ): boolean; 
isInfinite(  ): boolean; 
getShapeType(  ): number; 
getAnisotropicRollingFrictionDirection(  ): btVector3; 
setUserPointer( userPtr?: void ): void; 
getUserPointer(  ): any; 
setUserIndex( index?: number ): void; 
getUserIndex(  ): number; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
serializeSingleShape( serializer?: btSerializer ): void; 
getRawHeightFieldValue( x?: number, y?: number ): any; 
quantizeWithClamp( out?: number, point?: btVector3, isMax?: number ): void; 
getVertex( x?: number, y?: number, vertex?: btVector3 ): void; 
initialize( heightStickWidth?: number, heightStickLength?: number, heightfieldData?: void, heightScale?: any, minHeight?: any, maxHeight?: any, upAxis?: number, heightDataType?: any, flipQuadEdges?: boolean ): void; 
 

                } 

            }
        