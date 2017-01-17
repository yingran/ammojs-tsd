
            declare namespace Ammo { 

                export class MyInternalTriangleIndexCallback { 

                    constructor( colShape?: btCompoundShape, meshShape?: btGImpactMeshShape, depth?: any ); 

                    m_gimpactShape: btGImpactMeshShape; 
m_colShape: btCompoundShape; 
m_depth: any; 
 

                    internalProcessTriangleIndex( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
btInternalTriangleIndexCallback(  ): any; 
 

                } 

            }
        