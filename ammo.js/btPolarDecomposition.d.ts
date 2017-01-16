
            declare namespace Ammo { 

                export class btPolarDecomposition { 

                    constructor( tolerance?: any, maxIterations?: number ); 

                    m_tolerance: any; 
m_maxIterations: number; 
 

                    decompose( a?: btMatrix3x3, u?: btMatrix3x3, h?: btMatrix3x3 ): number; 
maxIterations(  ): number; 
 

                } 

            }
        