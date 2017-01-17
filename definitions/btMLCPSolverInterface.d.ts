
            declare namespace Ammo { 

                export class btMLCPSolverInterface { 

                    constructor(  ); 

                     

                    solveMLCP( A?: btMatrixXu, b?: btVectorXu, x?: btVectorXu, lo?: btVectorXu, hi?: btVectorXu, limitDependency?: any, numIterations?: number, useSparsity?: boolean ): boolean; 
 

                } 

            }
        