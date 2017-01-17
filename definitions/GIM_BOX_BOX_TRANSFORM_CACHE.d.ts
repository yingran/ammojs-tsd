
            declare namespace Ammo { 

                export class GIM_BOX_BOX_TRANSFORM_CACHE { 

                    constructor( trans1_to_0?: any ); 

                    m_T1to0: btVector3; 
m_R1to0: btMatrix3x3; 
m_AR: btMatrix3x3; 
 

                    calc_absolute_matrix(  ): void; 
calc_from_homogenic( trans0?: btTransform, trans1?: btTransform ): void; 
calc_from_full_invert( trans0?: btTransform, trans1?: btTransform ): void; 
transform( point?: btVector3 ): btVector3; 
 

                } 

            }
        