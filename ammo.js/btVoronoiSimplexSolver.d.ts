
            declare namespace Ammo { 

                export class btVoronoiSimplexSolver { 

                    constructor(  ); 

                    m_numVertices: number; 
m_simplexVectorW: btVector3; 
m_simplexPointsP: btVector3; 
m_simplexPointsQ: btVector3; 
m_cachedP1: btVector3; 
m_cachedP2: btVector3; 
m_cachedV: btVector3; 
m_lastW: btVector3; 
m_equalVertexThreshold: any; 
m_cachedValidClosest: boolean; 
m_cachedBC: btSubSimplexClosestResult; 
m_needsUpdate: boolean; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
removeVertex( index?: number ): void; 
reduceVertices( usedVerts?: btUsageBitfield ): void; 
updateClosestVectorAndPoints(  ): boolean; 
closestPtPointTetrahedron( p?: btVector3, a?: btVector3, b?: btVector3, c?: btVector3, d?: btVector3, finalResult?: btSubSimplexClosestResult ): boolean; 
pointOutsideOfPlane( p?: btVector3, a?: btVector3, b?: btVector3, c?: btVector3, d?: btVector3 ): number; 
closestPtPointTriangle( p?: btVector3, a?: btVector3, b?: btVector3, c?: btVector3, result?: btSubSimplexClosestResult ): boolean; 
reset(  ): void; 
addVertex( w?: btVector3, p?: btVector3, q?: btVector3 ): void; 
setEqualVertexThreshold( threshold?: any ): void; 
getEqualVertexThreshold(  ): any; 
closest( v?: btVector3 ): boolean; 
maxVertex(  ): any; 
fullSimplex(  ): boolean; 
getSimplex( pBuf?: btVector3, qBuf?: btVector3, yBuf?: btVector3 ): number; 
inSimplex( w?: btVector3 ): boolean; 
backup_closest( v?: btVector3 ): void; 
emptySimplex(  ): boolean; 
compute_points( p1?: btVector3, p2?: btVector3 ): void; 
numVertices(  ): number; 
 

                } 

            }
        