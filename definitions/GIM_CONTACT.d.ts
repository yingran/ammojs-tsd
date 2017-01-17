
            declare namespace Ammo { 

                export class GIM_CONTACT { 

                    constructor( point?: btVector3, normal?: btVector3, depth?: any, feature1?: any, feature2?: any ); 

                    m_point: btVector3; 
m_normal: btVector3; 
m_depth: any; 
m_distance: any; 
m_feature1: number; 
m_feature2: number; 
m_depth: any; 
m_distance: any; 
m_feature1: any; 
m_feature2: any; 
 

                    calc_key_contact(  ): number; 
interpolate_normals( normals?: btVector3, normal_count?: number ): void; 
calc_key_contact(  ): any; 
interpolate_normals( normals?: btVector3, normal_count?: any ): void; 
 

                } 

            }
        