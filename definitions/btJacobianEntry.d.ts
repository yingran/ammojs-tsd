
            declare namespace Ammo { 

                export class btJacobianEntry { 

                    constructor( world2A?: btMatrix3x3, world2B?: btMatrix3x3, rel_pos1?: btVector3, rel_pos2?: btVector3, jointAxis?: btVector3, inertiaInvA?: btVector3, massInvA?: any, inertiaInvB?: btVector3, massInvB?: any ); 

                    m_linearJointAxis: btVector3; 
m_aJ: btVector3; 
m_bJ: btVector3; 
m_0MinvJt: btVector3; 
m_1MinvJt: btVector3; 
m_Adiag: any; 
 

                    getDiagonal(  ): any; 
getNonDiagonal( jacB?: btJacobianEntry, massInvA?: any ): any; 
getNonDiagonal( jacB?: btJacobianEntry, massInvA?: any, massInvB?: any ): any; 
getRelativeVelocity( linvelA?: btVector3, angvelA?: btVector3, linvelB?: btVector3, angvelB?: btVector3 ): any; 
 

                } 

            }
        