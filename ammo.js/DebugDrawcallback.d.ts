
            declare namespace Ammo { 

                export class DebugDrawcallback { 

                    constructor( debugDrawer?: btIDebugDraw, worldTrans?: btTransform, color?: btVector3 ); 

                    m_debugDrawer: btIDebugDraw; 
m_color: btVector3; 
m_worldTrans: btTransform; 
 

                    internalProcessTriangleIndex( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
btTriangleCallback(  ): any; 
btInternalTriangleIndexCallback(  ): any; 
 

                } 

            }
        