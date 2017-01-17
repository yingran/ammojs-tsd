
            declare namespace Ammo { 

                export class btBroadphaseRayCallback { 

                    constructor(  ); 

                    m_rayDirectionInverse: btVector3; 
m_signs: number; 
m_lambda_max: any; 
 

                    btBroadphaseAabbCallback(  ): any; 
process( proxy?: btBroadphaseProxy ): boolean; 
 

                } 

            }
        