
            declare namespace Ammo { 

                export class btCPUVertexBufferDescriptor { 

                    constructor( basePointer?: number, vertexOffset?: number, vertexStride?: number, normalOffset?: number, normalStride?: number ); 

                    m_basePointer: any; 
m_hasVertexPositions: boolean; 
m_hasNormals: boolean; 
m_vertexOffset: number; 
m_vertexStride: number; 
m_normalOffset: number; 
m_normalStride: number; 
 

                    getBufferType(  ): any; 
getBasePointer(  ): any; 
btVertexBufferDescriptor(  ): any; 
btVertexBufferDescriptor(  ): any; 
hasVertexPositions(  ): boolean; 
hasNormals(  ): boolean; 
getVertexOffset(  ): number; 
getVertexStride(  ): number; 
getNormalOffset(  ): number; 
getNormalStride(  ): number; 
 

                } 

            }
        