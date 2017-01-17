
            declare namespace Ammo { 

                export class btMultiBodyLinkCollider { 

                    constructor( multiBody?: btMultiBody, link?: number ); 

                    m_multiBody: btMultiBody; 
m_link: number; 
 

                    checkCollideWithOverride( co?: btCollisionObject ): boolean; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
mergesSimulationIslands(  ): boolean; 
getAnisotropicFriction(  ): btVector3; 
setAnisotropicFriction( anisotropicFriction?: btVector3, frictionMode?: number ): void; 
hasAnisotropicFriction( frictionMode?: number ): boolean; 
setContactProcessingThreshold( contactProcessingThreshold?: any ): void; 
getContactProcessingThreshold(  ): any; 
isStaticObject(  ): boolean; 
isKinematicObject(  ): boolean; 
isStaticOrKinematicObject(  ): boolean; 
hasContactResponse(  ): boolean; 
btCollisionObject(  ): any; 
btCollisionObject(  ): any; 
setCollisionShape( collisionShape?: btCollisionShape ): void; 
getCollisionShape(  ): btCollisionShape; 
getCollisionShape(  ): btCollisionShape; 
setIgnoreCollisionCheck( co?: btCollisionObject, ignoreCollisionCheck?: boolean ): void; 
internalGetExtensionPointer(  ): any; 
internalSetExtensionPointer( pointer?: void ): void; 
getActivationState(  ): number; 
setActivationState( newState?: number ): void; 
setDeactivationTime( time?: any ): void; 
getDeactivationTime(  ): any; 
forceActivationState( newState?: number ): void; 
activate( forceActivation?: boolean ): void; 
isActive(  ): boolean; 
setRestitution( rest?: any ): void; 
getRestitution(  ): any; 
setFriction( frict?: any ): void; 
getFriction(  ): any; 
setRollingFriction( frict?: any ): void; 
getRollingFriction(  ): any; 
getInternalType(  ): number; 
getWorldTransform(  ): btTransform; 
getWorldTransform(  ): btTransform; 
setWorldTransform( worldTrans?: btTransform ): void; 
getBroadphaseHandle(  ): btBroadphaseProxy; 
getBroadphaseHandle(  ): btBroadphaseProxy; 
setBroadphaseHandle( handle?: btBroadphaseProxy ): void; 
getInterpolationWorldTransform(  ): btTransform; 
getInterpolationWorldTransform(  ): btTransform; 
setInterpolationWorldTransform( trans?: btTransform ): void; 
setInterpolationLinearVelocity( linvel?: btVector3 ): void; 
setInterpolationAngularVelocity( angvel?: btVector3 ): void; 
getInterpolationLinearVelocity(  ): btVector3; 
getInterpolationAngularVelocity(  ): btVector3; 
getIslandTag(  ): number; 
setIslandTag( tag?: number ): void; 
getCompanionId(  ): number; 
setCompanionId( id?: number ): void; 
getHitFraction(  ): any; 
setHitFraction( hitFraction?: any ): void; 
getCollisionFlags(  ): number; 
setCollisionFlags( flags?: number ): void; 
getCcdSweptSphereRadius(  ): any; 
setCcdSweptSphereRadius( radius?: any ): void; 
getCcdMotionThreshold(  ): any; 
getCcdSquareMotionThreshold(  ): any; 
setCcdMotionThreshold( ccdMotionThreshold?: any ): void; 
getUserPointer(  ): any; 
getUserIndex(  ): number; 
setUserPointer( userPointer?: void ): void; 
setUserIndex( index?: number ): void; 
getUpdateRevisionInternal(  ): number; 
checkCollideWith( co?: btCollisionObject ): boolean; 
calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
serializeSingleObject( serializer?: btSerializer ): void; 
 

                } 

            }
        