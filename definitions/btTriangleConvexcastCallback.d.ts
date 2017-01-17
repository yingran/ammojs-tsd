
            declare namespace Ammo { 

                export class btTriangleConvexcastCallback { 

                    constructor( convexShape?: btConvexShape, convexShapeFrom?: btTransform, convexShapeTo?: btTransform, triangleToWorld?: btTransform, triangleCollisionMargin?: any ); 

                    m_convexShape: btConvexShape; 
m_convexShapeFrom: btTransform; 
m_convexShapeTo: btTransform; 
m_triangleToWorld: btTransform; 
m_hitFraction: any; 
m_triangleCollisionMargin: any; 
m_allowedPenetration: any; 
 

                    processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
reportHit( hitNormalLocal?: btVector3, hitPointLocal?: btVector3, hitFraction?: any, partId?: number, triangleIndex?: number ): any; 
btTriangleCallback(  ): any; 
 

                } 

            }
        