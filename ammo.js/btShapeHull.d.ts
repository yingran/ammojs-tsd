
            declare namespace Ammo { 

                export class btShapeHull { 

                    constructor( shape?: btConvexShape ); 

                    m_vertices: any; 
m_indices: any; 
m_numIndices: number; 
m_shape: btConvexShape; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
buildHull( margin?: any ): boolean; 
numTriangles(  ): number; 
numVertices(  ): number; 
numIndices(  ): number; 
getVertexPointer(  ): btVector3; 
getIndexPointer(  ): any; 
 

                } 

            }
        