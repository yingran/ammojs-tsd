
            declare namespace Ammo { 

                export class btVertexBufferDescriptor { 

                    constructor(  ); 

                    m_hasVertexPositions: boolean; 
m_hasNormals: boolean; 
m_vertexOffset: number; 
m_vertexStride: number; 
m_normalOffset: number; 
m_normalStride: number; 
 

                    hasVertexPositions(  ): boolean; 
hasNormals(  ): boolean; 
getBufferType(  ): any; 
getVertexOffset(  ): number; 
getVertexStride(  ): number; 
getNormalOffset(  ): number; 
getNormalStride(  ): number; 
 

                } 

            }
        