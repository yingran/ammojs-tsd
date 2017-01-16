
            declare namespace Ammo { 

                export class btStridingMeshInterface { 

                    constructor(  ); 

                    m_scaling: btVector3; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
InternalProcessAllTriangles( callback?: btInternalTriangleIndexCallback, aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
calculateAabbBruteForce( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getLockedVertexIndexBase( vertexbase?: string, numverts?: number, type?: any, stride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number ): void; 
getLockedReadOnlyVertexIndexBase( vertexbase?: string, numverts?: number, type?: any, stride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number ): void; 
unLockVertexBase( subpart?: number ): void; 
unLockReadOnlyVertexBase( subpart?: number ): void; 
getNumSubParts(  ): number; 
preallocateVertices( numverts?: number ): void; 
preallocateIndices( numindices?: number ): void; 
hasPremadeAabb(  ): boolean; 
setPremadeAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getPremadeAabb( aabbMin?: btVector3, aabbMax?: btVector3 ): void; 
getScaling(  ): btVector3; 
setScaling( scaling?: btVector3 ): void; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
 

                } 

            }
        