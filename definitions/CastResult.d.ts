
            declare namespace Ammo { 

                export class CastResult { 

                    constructor(  ); 

                    m_hitTransformA: btTransform; 
m_hitTransformB: btTransform; 
m_normal: btVector3; 
m_hitPoint: btVector3; 
m_fraction: any; 
m_debugDrawer: btIDebugDraw; 
m_allowedPenetration: any; 
 

                    DebugDraw( fraction?: any ): void; 
drawCoordSystem( trans?: btTransform ): void; 
reportFailure( errNo?: number, numIterations?: number ): void; 
 

                } 

            }
        