
            declare namespace Ammo { 

                export class CJoint { 

                    constructor(  ); 

                    m_life: number; 
m_maxlife: number; 
m_rpos: btVector3; 
m_normal: btVector3; 
m_friction: any; 
m_bodies: any; 
m_refs: btVector3; 
m_cfm: any; 
m_erp: any; 
m_split: any; 
m_drift: btVector3; 
m_sdrift: btVector3; 
m_massmatrix: btMatrix3x3; 
m_delete: boolean; 
 

                    Prepare( dt?: any, iterations?: number ): void; 
Solve( dt?: any, sor?: any ): void; 
Terminate( dt?: any ): void; 
Type(  ): any; 
Joint(  ): any; 
Joint(  ): any; 
 

                } 

            }
        