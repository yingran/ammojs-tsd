
            declare namespace Ammo { 

                export class Rational64 { 

                    constructor( numerator?: any, denominator?: any ); 

                    m_numerator: any; 
m_denominator: any; 
sign: number; 
 

                    isNegativeInfinity(  ): boolean; 
isNaN(  ): boolean; 
compare( b?: any ): number; 
toScalar(  ): any; 
 

                } 

            }
        