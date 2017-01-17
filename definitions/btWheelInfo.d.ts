
            declare namespace Ammo { 

                export class btWheelInfo { 

                    constructor( ci?: btWheelInfoConstructionInfo ); 

                    m_raycastInfo: any; 
m_worldTransform: btTransform; 
m_chassisConnectionPointCS: btVector3; 
m_wheelDirectionCS: btVector3; 
m_wheelAxleCS: btVector3; 
m_suspensionRestLength1: any; 
m_maxSuspensionTravelCm: any; 
m_wheelsRadius: any; 
m_suspensionStiffness: any; 
m_wheelsDampingCompression: any; 
m_wheelsDampingRelaxation: any; 
m_frictionSlip: any; 
m_steering: any; 
m_rotation: any; 
m_deltaRotation: any; 
m_rollInfluence: any; 
m_maxSuspensionForce: any; 
m_engineForce: any; 
m_brake: any; 
m_bIsFrontWheel: boolean; 
m_clientInfo: any; 
m_clippedInvContactDotSuspension: any; 
m_suspensionRelativeVelocity: any; 
m_wheelsSuspensionForce: any; 
m_skidInfo: any; 
 

                    getSuspensionRestLength(  ): any; 
updateWheel( chassis?: btRigidBody, raycastInfo?: any ): void; 
 

                } 

            }
        