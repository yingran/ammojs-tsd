
            declare namespace Ammo { 

                export class btRaycastVehicle { 

                    constructor( tuning?: btVehicleTuning, chassis?: btRigidBody, raycaster?: btVehicleRaycaster ); 

                    m_wheelInfo: any; 
m_forwardWS: any; 
m_axle: any; 
m_forwardImpulse: any; 
m_sideImpulse: any; 
m_userConstraintType: number; 
m_userConstraintId: number; 
m_tau: any; 
m_damping: any; 
m_vehicleRaycaster: btVehicleRaycaster; 
m_pitchControl: any; 
m_steeringValue: any; 
m_currentVehicleSpeedKmHour: any; 
m_chassisBody: btRigidBody; 
m_indexRightAxis: number; 
m_indexUpAxis: number; 
m_indexForwardAxis: number; 
 

                    updateAction( collisionWorld?: btCollisionWorld, step?: any ): void; 
debugDraw( debugDrawer?: btIDebugDraw ): void; 
getChassisWorldTransform(  ): btTransform; 
rayCast( wheel?: btWheelInfo ): any; 
updateVehicle( step?: any ): void; 
resetSuspension(  ): void; 
getSteeringValue( wheel?: number ): any; 
setSteeringValue( steering?: any, wheel?: number ): void; 
applyEngineForce( force?: any, wheel?: number ): void; 
getWheelTransformWS( wheelIndex?: number ): btTransform; 
updateWheelTransform( wheelIndex?: number, interpolatedTransform?: boolean ): void; 
addWheel( connectionPointCS0?: btVector3, wheelDirectionCS0?: btVector3, wheelAxleCS?: btVector3, suspensionRestLength?: any, wheelRadius?: any, tuning?: btVehicleTuning, isFrontWheel?: boolean ): btWheelInfo; 
getNumWheels(  ): number; 
getWheelInfo( index?: number ): btWheelInfo; 
getWheelInfo( index?: number ): btWheelInfo; 
updateWheelTransformsWS( wheel?: btWheelInfo, interpolatedTransform?: boolean ): void; 
setBrake( brake?: any, wheelIndex?: number ): void; 
setPitchControl( pitch?: any ): void; 
updateSuspension( deltaTime?: any ): void; 
updateFriction( timeStep?: any ): void; 
getRigidBody(  ): btRigidBody; 
getRigidBody(  ): btRigidBody; 
getRightAxis(  ): number; 
getUpAxis(  ): number; 
getForwardAxis(  ): number; 
getForwardVector(  ): btVector3; 
getCurrentSpeedKmHour(  ): any; 
setCoordinateSystem( rightIndex?: number, upIndex?: number, forwardIndex?: number ): void; 
getUserConstraintType(  ): number; 
setUserConstraintType( userConstraintType?: number ): void; 
setUserConstraintId( uid?: number ): void; 
getUserConstraintId(  ): number; 
btActionInterface(  ): any; 
defaultInit( tuning?: btVehicleTuning ): void; 
 

                } 

            }
        