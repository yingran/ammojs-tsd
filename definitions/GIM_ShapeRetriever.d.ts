
            declare namespace Ammo { 

                export class GIM_ShapeRetriever { 

                    constructor( gim_shape?: btGImpactShapeInterface ); 

                    m_gim_shape: btGImpactShapeInterface; 
m_trishape: btTriangleShapeEx; 
m_tetrashape: btTetrahedronShapeEx; 
m_child_retriever: any; 
m_tri_retriever: any; 
m_tetra_retriever: any; 
m_current_retriever: any; 
 

                    getChildShape( index?: number ): btCollisionShape; 
 

                } 

            }
        