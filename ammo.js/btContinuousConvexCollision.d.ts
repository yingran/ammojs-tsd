
            declare namespace Ammo { 

                export class btContinuousConvexCollision { 

                    constructor( shapeA?: btConvexShape, shapeB?: btConvexShape, simplexSolver?: btSimplexSolverInterface, penetrationDepthSolver?: btConvexPenetrationDepthSolver ); 

                    m_simplexSolver: btSimplexSolverInterface; 
m_penetrationDepthSolver: btConvexPenetrationDepthSolver; 
m_convexA: btConvexShape; 
m_convexB1: btConvexShape; 
m_planeShape: btStaticPlaneShape; 
 

                    calcTimeOfImpact( fromA?: btTransform, toA?: btTransform, fromB?: btTransform, toB?: btTransform, result?: any ): boolean; 
btConvexCast(  ): any; 
computeClosestPoints( transA?: btTransform, transB?: btTransform, pointCollector?: btPointCollector ): void; 
 

                } 

            }
        