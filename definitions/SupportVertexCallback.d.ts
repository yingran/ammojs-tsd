
            declare namespace Ammo { 

                export class SupportVertexCallback { 

                    constructor( supportVecWorld?: btVector3, trans?: btTransform ); 

                    m_worldTrans: btTransform; 
m_maxDot: any; 
m_supportVecLocal: btVector3; 
m_supportVertexLocal: btVector3; 
 

                    processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
GetSupportVertexWorldSpace(  ): btVector3; 
GetSupportVertexLocal(  ): btVector3; 
btTriangleCallback(  ): any; 
 

                } 

            }
        