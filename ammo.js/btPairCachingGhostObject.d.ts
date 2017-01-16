
            declare namespace Ammo { 

                export class btPairCachingGhostObject { 

                    constructor(  ); 

                    m_hashPairCache: btHashedOverlappingPairCache; 
 

                    addOverlappingObjectInternal( otherProxy?: btBroadphaseProxy, thisProxy?: btBroadphaseProxy ): void; 
removeOverlappingObjectInternal( otherProxy?: btBroadphaseProxy, dispatcher?: btDispatcher, thisProxy?: btBroadphaseProxy ): void; 
getOverlappingPairCache(  ): btHashedOverlappingPairCache; 
btGhostObject(  ): any; 
btGhostObject(  ): any; 
convexSweepTest( castShape?: btConvexShape, convexFromWorld?: btTransform, convexToWorld?: btTransform, resultCallback?: btCollisionWorld::ConvexResultCallback, allowedCcdPenetration?: any ): void; 
rayTest( rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: btCollisionWorld::RayResultCallback ): void; 
getNumOverlappingObjects(  ): number; 
getOverlappingObject( index?: number ): btCollisionObject; 
getOverlappingObject( index?: number ): btCollisionObject; 
getOverlappingPairs(  ): any; 
getOverlappingPairs(  ): any; 
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
        