
            declare namespace Ammo { 

                export class btTriangleIndexVertexArray { 

                    constructor( numTriangles?: number, triangleIndexBase?: number, triangleIndexStride?: number, numVertices?: number, vertexBase?: any, vertexStride?: number ); 

                    m_indexedMeshes: any; 
m_pad: number; 
m_hasAabb: number; 
m_aabbMin: btVector3; 
m_aabbMax: btVector3; 
m_scaling: btVector3; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
addIndexedMesh( mesh?: btIndexedMesh, indexType?: any ): void; 
getLockedVertexIndexBase( vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number ): void; 
getLockedReadOnlyVertexIndexBase( vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number ): void; 
unLockVertexBase( subpart?: number ): void; 
unLockReadOnlyVertexBase( subpart?: number ): void; 
getNumSubParts(  ): number; 
getIndexedMeshArray(  ): any; 
getIndexedMeshArray(  ): any; 
preallocateVertices( numverts?: number ): void; 
preallocateIndices( numindices?: number ): void; 
hasPremadeAabb(  ): boolean; 
setPremadeAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getPremadeAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btStridingMeshInterface(  ): any; 
btStridingMeshInterface(  ): any; 
InternalProcessAllTriangles( callback?: btInternalTriangleIndexCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
calculateAabbBruteForce( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getScaling(  ): btVector3; 
setScaling( scaling?: btVector3 ): void; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
 

                } 

            }
        