
            declare namespace Ammo { 

                export class btBoxBoxDetector { 

                    constructor( box1?: btBoxShape, box2?: btBoxShape ); 

                    m_box1: btBoxShape; 
m_box2: btBoxShape; 
 

                    getClosestPoints( input?: any, output?: any, debugDraw?: btIDebugDraw, swapResults?: boolean ): void; 
btDiscreteCollisionDetectorInterface(  ): any; 
 

                } 

            }
        