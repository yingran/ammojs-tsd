
            declare namespace Ammo { 

                export class btLemkeAlgorithm { 

                    constructor( M_?: btMatrixXu, q_?: btVectorXu, DEBUGLEVEL_?: number ); 

                    m_M: btMatrixXu; 
m_q: btVectorXu; 
steps: number; 
DEBUGLEVEL: number; 
info: number; 
 

                    getInfo(  ): number; 
getSteps( arg1?: any ): number; 
setSystem( M_?: btMatrixXu, q_?: btVectorXu ): void; 
solve( maxloops?: number ): btVectorXu; 
findLexicographicMinimum( A?: btMatrixXu, pivotColIndex?: number ): number; 
LexicographicPositive( v?: btVectorXu ): boolean; 
GaussJordanEliminationStep( A?: btMatrixXu, pivotRowIndex?: number, pivotColumnIndex?: number, basis?: any ): void; 
greaterZero( vector?: btVectorXu ): boolean; 
validBasis( basis?: any ): boolean; 
 

                } 

            }
        