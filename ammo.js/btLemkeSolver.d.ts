
            declare namespace Ammo { 

                export class btLemkeSolver { 

                    constructor(  ); 

                    m_maxValue: any; 
m_debugLevel: number; 
m_maxLoops: number; 
m_useLoHighBounds: boolean; 
 

                    solveMLCP( A?: btMatrixXu, b?: btVectorXu, x?: btVectorXu, lo?: btVectorXu, hi?: btVectorXu, limitDependency?: any, numIterations?: number, useSparsity?: boolean ): boolean; 
btMLCPSolverInterface(  ): any; 
 

                } 

            }
        