
            declare namespace Ammo { 

                export class btGImpactTriangleCallback { 

                    constructor(  ); 

                    algorithm: btGImpactCollisionAlgorithm; 
body0Wrap: btCollisionObjectWrapper; 
body1Wrap: btCollisionObjectWrapper; 
gimpactshape0: btGImpactShapeInterface; 
swapped: boolean; 
margin: any; 
 

                    processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
btTriangleCallback(  ): any; 
 

                } 

            }
        