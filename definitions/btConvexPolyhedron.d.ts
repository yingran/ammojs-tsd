
            declare namespace Ammo { 

                export class btConvexPolyhedron { 

                    constructor(  ); 

                    m_vertices: any; 
m_faces: any; 
m_uniqueEdges: any; 
m_localCenter: btVector3; 
m_extents: btVector3; 
m_radius: any; 
mC: btVector3; 
mE: btVector3; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
initialize(  ): void; 
testContainment(  ): boolean; 
project( trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3 ): void; 
 

                } 

            }
        