
            declare namespace Ammo { 

                export class btTriangleBuffer { 

                    constructor(  ); 

                    m_triangleBuffer: any; 
 

                    processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
getNumTriangles(  ): number; 
getTriangle( index?: number ): btTriangle; 
clearBuffer(  ): void; 
btTriangleCallback(  ): any; 
 

                } 

            }
        