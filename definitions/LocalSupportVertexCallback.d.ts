
            declare namespace Ammo { 

                export class LocalSupportVertexCallback { 

                    constructor( supportVecLocal?: btVector3 ); 

                    m_maxDot: any; 
m_supportVecLocal: btVector3; 
m_supportVertexLocal: btVector3; 
 

                    internalProcessTriangleIndex( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
GetSupportVertexLocal(  ): btVector3; 
btInternalTriangleIndexCallback(  ): any; 
 

                } 

            }
        