
            declare namespace Ammo { 

                export class btScaledTriangleCallback { 

                    constructor( originalCallback?: btTriangleCallback, localScaling?: btVector3 ); 

                    m_originalCallback: btTriangleCallback; 
m_localScaling: btVector3; 
 

                    processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
btTriangleCallback(  ): any; 
 

                } 

            }
        