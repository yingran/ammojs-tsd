
            declare namespace Ammo { 

                export class SphereTriangleDetector { 

                    constructor( sphere?: btSphereShape, triangle?: btTriangleShape, contactBreakingThreshold?: any ); 

                    m_sphere: btSphereShape; 
m_triangle: btTriangleShape; 
m_contactBreakingThreshold: any; 
 

                    getClosestPoints( input?: any, output?: any, debugDraw?: btIDebugDraw, swapResults?: boolean ): void; 
collide( sphereCenter?: btVector3, point?: btVector3, resultNormal?: btVector3, depth?: any, timeOfImpact?: any, contactBreakingThreshold?: any ): boolean; 
btDiscreteCollisionDetectorInterface(  ): any; 
pointInTriangle( vertices?: btVector3, normal?: btVector3, p?: btVector3 ): boolean; 
facecontains( p?: btVector3, vertices?: btVector3, normal?: btVector3 ): boolean; 
 

                } 

            }
        