
            declare namespace Ammo { 

                export class HullLibrary { 

                    constructor(  ); 

                    m_vertexIndexMapping: any; 
m_tris: any; 
 

                    CreateConvexHull( desc?: any, result?: any ): any; 
ReleaseResult( result?: any ): any; 
ComputeHull( vcount?: number, vertices?: btVector3, result?: any, vlimit?: number ): boolean; 
allocateTriangle( a?: number, b?: number, c?: number ): btHullTriangle; 
deAllocateTriangle( arg1?: btHullTriangle ): void; 
b2bfix( s?: btHullTriangle, t?: btHullTriangle ): void; 
removeb2b( s?: btHullTriangle, t?: btHullTriangle ): void; 
checkit( t?: btHullTriangle ): void; 
extrudable( epsilon?: any ): btHullTriangle; 
calchull( verts?: btVector3, verts_count?: number, tris_out?: any, tris_count?: number, vlimit?: number ): number; 
calchullgen( verts?: btVector3, verts_count?: number, vlimit?: number ): number; 
FindSimplex( verts?: btVector3, verts_count?: number, allow?: any ): any; 
ConvexHCrop( convex?: any, slice?: btPlane ): any; 
extrude( t0?: btHullTriangle, v?: number ): void; 
test_cube(  ): any; 
BringOutYourDead( verts?: btVector3, vcount?: number, overts?: btVector3, ocount?: number, indices?: number, indexcount?: any ): void; 
CleanupVertices( svcount?: number, svertices?: btVector3, stride?: number, vcount?: number, vertices?: btVector3, normalepsilon?: any, scale?: btVector3 ): boolean; 
 

                } 

            }
        