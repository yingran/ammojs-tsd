
            declare namespace Ammo { 

                export class btSubSimplexClosestResult { 

                    constructor(  ); 

                    m_closestPointOnSimplex: btVector3; 
m_usedVertices: btUsageBitfield; 
m_barycentricCoords: any; 
m_degenerate: boolean; 
 

                    reset(  ): void; 
isValid(  ): boolean; 
setBarycentricCoordinates( a?: any ): void; 
 

                } 

            }
        