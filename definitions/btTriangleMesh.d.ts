
            declare namespace Ammo { 

                export class btTriangleMesh { 

                    constructor( use32bitIndices?: boolean, use4componentVertices?: boolean ); 

                    m_weldingThreshold: any; 
m_4componentVertices: any; 
m_3componentVertices: any; 
m_32bitIndices: any; 
m_16bitIndices: any; 
m_use32bitIndices: boolean; 
m_use4componentVertices: boolean; 
 

                    getUse32bitIndices(  ): boolean; 
getUse4componentVertices(  ): boolean; 
addTriangle( vertex0?: btVector3, vertex1?: btVector3, vertex2?: btVector3, removeDuplicateVertices?: boolean ): void; 
addTriangleIndices( index1?: number, index2?: number, index3?: number ): void; 
getNumTriangles(  ): number; 
preallocateVertices( numverts?: number ): void; 
preallocateIndices( numindices?: number ): void; 
findOrAddVertex( vertex?: btVector3, removeDuplicateVertices?: boolean ): number; 
addIndex( index?: number ): void; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
btTriangleIndexVertexArray(  ): any; 
btTriangleIndexVertexArray(  ): any; 
btTriangleIndexVertexArray( numTriangles?: number, triangleIndexBase?: number, triangleIndexStride?: number, numVertices?: number, vertexBase?: any, vertexStride?: number ): any; 
addIndexedMesh( mesh?: btIndexedMesh, indexType?: any ): void; 
getLockedVertexIndexBase( vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number ): void; 
getLockedReadOnlyVertexIndexBase( vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number ): void; 
unLockVertexBase( subpart?: number ): void; 
unLockReadOnlyVertexBase( subpart?: number ): void; 
getNumSubParts(  ): number; 
getIndexedMeshArray(  ): any; 
getIndexedMeshArray(  ): any; 
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
        