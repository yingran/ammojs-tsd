
            declare namespace Ammo { 

                export class btDantzigSolver { 

                    constructor(  ); 

                    m_acceptableUpperLimitSolution: any; 
m_tempBuffer: any; 
m_A: any; 
m_b: any; 
m_x: any; 
m_lo: any; 
m_hi: any; 
m_dependencies: any; 
m_scratchMemory: btDantzigScratchMemory; 
 

                    solveMLCP( A?: btMatrixXu, b?: btVectorXu, x?: btVectorXu, lo?: btVectorXu, hi?: btVectorXu, limitDependency?: any, numIterations?: number, useSparsity?: boolean ): boolean; 
btMLCPSolverInterface(  ): any; 
 

                } 

            }
        