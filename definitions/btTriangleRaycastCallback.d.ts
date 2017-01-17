
            declare namespace Ammo { 

                export class btTriangleRaycastCallback { 

                    constructor( from?: btVector3, to?: btVector3, flags?: number ); 

                    m_from: btVector3; 
m_to: btVector3; 
m_flags: number; 
m_hitFraction: any; 
 

                    processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
reportHit( hitNormalLocal?: btVector3, hitFraction?: any, partId?: number, triangleIndex?: number ): any; 
btTriangleCallback(  ): any; 
 

                } 

            }
        