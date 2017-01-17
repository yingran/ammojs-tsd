
            declare namespace Ammo { 

                export class btCollisionObject { 

                    constructor(  ); 

                    m_worldTransform: btTransform; 
m_interpolationWorldTransform: btTransform; 
m_interpolationLinearVelocity: btVector3; 
m_interpolationAngularVelocity: btVector3; 
m_anisotropicFriction: btVector3; 
m_hasAnisotropicFriction: number; 
m_contactProcessingThreshold: any; 
m_broadphaseHandle: btBroadphaseProxy; 
m_collisionShape: btCollisionShape; 
m_extensionPointer: any; 
m_rootCollisionShape: btCollisionShape; 
m_collisionFlags: number; 
m_islandTag1: number; 
m_companionId: number; 
m_activationState1: number; 
m_deactivationTime: any; 
m_friction: any; 
m_restitution: any; 
m_rollingFriction: any; 
m_internalType: number; 
m_userObjectPointer: any; 
m_userIndex: number; 
m_hitFraction: any; 
m_ccdSweptSphereRadius: any; 
m_ccdMotionThreshold: any; 
m_checkCollideWith: number; 
m_objectsWithoutCollisionCheck: any; 
m_updateRevision: number; 
 

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
setCollisionShape( collisionShape?: btCollisionShape ): void; 
getCollisionShape(  ): btCollisionShape; 
getCollisionShape(  ): btCollisionShape; 
setIgnoreCollisionCheck( co?: btCollisionObject, ignoreCollisionCheck?: boolean ): void; 
checkCollideWithOverride( co?: btCollisionObject ): boolean; 
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
        