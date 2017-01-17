
            declare namespace Ammo { 

                export class btCharacterControllerInterface { 

                    constructor(  ); 

                     

                    setWalkDirection( walkDirection?: btVector3 ): void; 
setVelocityForTimeInterval( velocity?: btVector3, timeInterval?: any ): void; 
reset( collisionWorld?: btCollisionWorld ): void; 
warp( origin?: btVector3 ): void; 
preStep( collisionWorld?: btCollisionWorld ): void; 
playerStep( collisionWorld?: btCollisionWorld, dt?: any ): void; 
canJump(  ): boolean; 
jump(  ): void; 
onGround(  ): boolean; 
setUpInterpolate( value?: boolean ): void; 
btActionInterface(  ): any; 
updateAction( collisionWorld?: btCollisionWorld, deltaTimeStep?: any ): void; 
debugDraw( debugDrawer?: btIDebugDraw ): void; 
 

                } 

            }
        