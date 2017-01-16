
            declare namespace Ammo { 

                export class btGjkPairDetector { 

                    constructor( objectA?: btConvexShape, objectB?: btConvexShape, shapeTypeA?: number, shapeTypeB?: number, marginA?: any, marginB?: any, simplexSolver?: btSimplexSolverInterface, penetrationDepthSolver?: btConvexPenetrationDepthSolver ); 

                    m_lastUsedMethod: number; 
m_curIter: number; 
m_degenerateSimplex: number; 
m_catchDegeneracies: number; 
m_fixContactNormalDirection: number; 
m_cachedSeparatingAxis: btVector3; 
m_penetrationDepthSolver: btConvexPenetrationDepthSolver; 
m_simplexSolver: btSimplexSolverInterface; 
m_minkowskiA: btConvexShape; 
m_minkowskiB: btConvexShape; 
m_shapeTypeA: number; 
m_shapeTypeB: number; 
m_marginA: any; 
m_marginB: any; 
m_ignoreMargin: boolean; 
m_cachedSeparatingDistance: any; 
 

                    getClosestPoints( input?: any, output?: any, debugDraw?: btIDebugDraw, swapResults?: boolean ): void; 
getClosestPointsNonVirtual( input?: any, output?: any, debugDraw?: btIDebugDraw ): void; 
setMinkowskiA( minkA?: btConvexShape ): void; 
setMinkowskiB( minkB?: btConvexShape ): void; 
setCachedSeperatingAxis( seperatingAxis?: btVector3 ): void; 
getCachedSeparatingAxis(  ): btVector3; 
getCachedSeparatingDistance(  ): any; 
setPenetrationDepthSolver( penetrationDepthSolver?: btConvexPenetrationDepthSolver ): void; 
setIgnoreMargin( ignoreMargin?: boolean ): void; 
btDiscreteCollisionDetectorInterface(  ): any; 
 

                } 

            }
        