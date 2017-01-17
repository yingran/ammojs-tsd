
            declare namespace Ammo { 

                export class btKinematicCharacterController { 

                    constructor( ghostObject?: btPairCachingGhostObject, convexShape?: btConvexShape, stepHeight?: any, upAxis?: number ); 

                    m_halfHeight: any; 
m_ghostObject: btPairCachingGhostObject; 
m_convexShape: btConvexShape; 
m_verticalVelocity: any; 
m_verticalOffset: any; 
m_fallSpeed: any; 
m_jumpSpeed: any; 
m_maxJumpHeight: any; 
m_maxSlopeRadians: any; 
m_maxSlopeCosine: any; 
m_gravity: any; 
m_turnAngle: any; 
m_stepHeight: any; 
m_addedMargin: any; 
m_walkDirection: btVector3; 
m_normalizedDirection: btVector3; 
m_currentPosition: btVector3; 
m_currentStepOffset: any; 
m_targetPosition: btVector3; 
m_manifoldArray: btManifoldArray; 
m_touchingContact: boolean; 
m_touchingNormal: btVector3; 
m_wasOnGround: boolean; 
m_wasJumping: boolean; 
m_useGhostObjectSweepTest: boolean; 
m_useWalkDirection: boolean; 
m_velocityTimeInterval: any; 
m_upAxis: number; 
m_interpolateUp: boolean; 
full_drop: boolean; 
bounce_fix: boolean; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
updateAction( collisionWorld?: btCollisionWorld, deltaTime?: any ): void; 
debugDraw( debugDrawer?: btIDebugDraw ): void; 
setUpAxis( axis?: number ): void; 
setWalkDirection( walkDirection?: btVector3 ): void; 
setVelocityForTimeInterval( velocity?: btVector3, timeInterval?: any ): void; 
reset( collisionWorld?: btCollisionWorld ): void; 
warp( origin?: btVector3 ): void; 
preStep( collisionWorld?: btCollisionWorld ): void; 
playerStep( collisionWorld?: btCollisionWorld, dt?: any ): void; 
setFallSpeed( fallSpeed?: any ): void; 
setJumpSpeed( jumpSpeed?: any ): void; 
setMaxJumpHeight( maxJumpHeight?: any ): void; 
canJump(  ): boolean; 
jump(  ): void; 
setGravity( gravity?: any ): void; 
getGravity(  ): any; 
setMaxSlope( slopeRadians?: any ): void; 
getMaxSlope(  ): any; 
getGhostObject(  ): btPairCachingGhostObject; 
setUseGhostSweepTest( useGhostObjectSweepTest?: boolean ): void; 
onGround(  ): boolean; 
setUpInterpolate( value?: boolean ): void; 
btCharacterControllerInterface(  ): any; 
btCharacterControllerInterface(  ): any; 
btActionInterface(  ): any; 
computeReflectionDirection( direction?: btVector3, normal?: btVector3 ): btVector3; 
parallelComponent( direction?: btVector3, normal?: btVector3 ): btVector3; 
perpindicularComponent( direction?: btVector3, normal?: btVector3 ): btVector3; 
recoverFromPenetration( collisionWorld?: btCollisionWorld ): boolean; 
stepUp( collisionWorld?: btCollisionWorld ): void; 
updateTargetPositionBasedOnCollision( hit_normal?: btVector3, tangentMag?: any ): void; 
stepForwardAndStrafe( collisionWorld?: btCollisionWorld, walkMove?: btVector3 ): void; 
stepDown( collisionWorld?: btCollisionWorld, dt?: any ): void; 
 

                } 

            }
        