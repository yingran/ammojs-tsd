
            declare namespace Ammo { 

                export class btConvexSeparatingDistanceUtil { 

                    constructor( boundingRadiusA?: any, boundingRadiusB?: any ); 

                    m_ornA: btQuaternion; 
m_ornB: btQuaternion; 
m_posA: btVector3; 
m_posB: btVector3; 
m_separatingNormal: btVector3; 
m_boundingRadiusA: any; 
m_boundingRadiusB: any; 
m_separatingDistance: any; 
 

                    getConservativeSeparatingDistance(  ): any; 
updateSeparatingDistance( transA?: btTransform, transB?: btTransform ): void; 
initSeparatingDistance( separatingVector?: btVector3, separatingDistance?: any, transA?: btTransform, transB?: btTransform ): void; 
 

                } 

            }
        