
            declare namespace Ammo { 

                export class btAngularLimit { 

                    constructor(  ); 

                    m_center: any; 
m_halfRange: any; 
m_softness: any; 
m_biasFactor: any; 
m_relaxationFactor: any; 
m_correction: any; 
m_sign: any; 
m_solveLimit: boolean; 
 

                    set( low?: any, high?: any, _softness?: any, _biasFactor?: any, _relaxationFactor?: any ): void; 
test( angle?: any ): void; 
getSoftness(  ): any; 
getBiasFactor(  ): any; 
getRelaxationFactor(  ): any; 
getCorrection(  ): any; 
getSign(  ): any; 
getHalfRange(  ): any; 
isLimit(  ): boolean; 
fit( angle?: any ): void; 
getError(  ): any; 
getLow(  ): any; 
getHigh(  ): any; 
 

                } 

            }
        