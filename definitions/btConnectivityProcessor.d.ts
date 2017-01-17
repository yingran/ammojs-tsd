
            declare namespace Ammo { 

                export class btConnectivityProcessor { 

                    constructor(  ); 

                    m_partIdA: number; 
m_triangleIndexA: number; 
m_triangleVerticesA: btVector3; 
m_triangleInfoMap: btTriangleInfoMap; 
 

                    processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
btTriangleCallback(  ): any; 
 

                } 

            }
        