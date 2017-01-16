
            declare namespace Ammo { 

                export class GIM_TRIANGLE_CONTACT { 

                    constructor( other?: any ); 

                    m_penetration_depth: any; 
m_point_count: number; 
m_separating_normal: btVector4; 
m_points: btVector3; 
 

                    copy_from( other?: any ): void; 
merge_points( plane?: btVector4, margin?: any, points?: btVector3, point_count?: number ): void; 
 

                } 

            }
        