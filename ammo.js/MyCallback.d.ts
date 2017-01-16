
            declare namespace Ammo { 

                export class MyCallback { 

                    constructor( from?: btVector3, to?: btVector3, ignorePart?: number, ignoreTriangleIndex?: number ); 

                    m_ignorePart: number; 
m_ignoreTriangleIndex: number; 
m_from: btVector3; 
m_to: btVector3; 
m_flags: number; 
m_hitFraction: any; 
 

                    reportHit( hitNormalLocal?: btVector3, hitFraction?: any, partId?: number, triangleIndex?: number ): any; 
btTriangleRaycastCallback( from?: btVector3, to?: btVector3, flags?: number ): any; 
processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
btTriangleCallback(  ): any; 
 

                } 

            }
        