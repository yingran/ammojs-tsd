
            declare namespace Ammo { 

                export class btSubsimplexConvexCast { 

                    constructor( shapeA?: btConvexShape, shapeB?: btConvexShape, simplexSolver?: btSimplexSolverInterface ); 

                    m_simplexSolver: btSimplexSolverInterface; 
m_convexA: btConvexShape; 
m_convexB: btConvexShape; 
 

                    calcTimeOfImpact( fromA?: btTransform, toA?: btTransform, fromB?: btTransform, toB?: btTransform, result?: any ): boolean; 
btConvexCast(  ): any; 
 

                } 

            }
        