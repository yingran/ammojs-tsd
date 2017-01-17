
            declare namespace Ammo { 

                export class btDefaultVehicleRaycaster { 

                    constructor( world?: btDynamicsWorld ); 

                    m_dynamicsWorld: btDynamicsWorld; 
 

                    castRay( from?: btVector3, to?: btVector3, result?: btVehicleRaycasterResult ): any; 
btVehicleRaycaster(  ): any; 
 

                } 

            }
        