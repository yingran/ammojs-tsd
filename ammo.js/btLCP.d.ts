
            declare namespace Ammo { 

                export class btLCP { 

                    constructor( _n?: number, _nskip?: number, _nub?: number, _Adata?: any, _x?: any, _b?: any, _w?: any, _lo?: any, _hi?: any, l?: any, _d?: any, _Dell?: any, _ell?: any, _tmp?: any, _state?: boolean, _findex?: number, p?: number, c?: number, Arows?: any ); 

                    m_n: number; 
m_nskip: number; 
m_nub: number; 
m_nC: number; 
m_nN: number; 
m_A: any; 
m_x: any; 
m_b: any; 
m_w: any; 
m_lo: any; 
m_hi: any; 
m_L: any; 
m_d: any; 
m_Dell: any; 
m_ell: any; 
m_tmp: any; 
m_state: any; 
m_findex: any; 
m_p: any; 
m_C: any; 
 

                    getNub(  ): number; 
transfer_i_to_C( i?: number ): void; 
transfer_i_to_N( i?: number ): void; 
transfer_i_from_N_to_C( i?: number ): void; 
transfer_i_from_C_to_N( i?: number, scratch?: any ): void; 
numC(  ): number; 
numN(  ): number; 
indexC( i?: number ): number; 
indexN( i?: number ): number; 
Aii( i?: number ): any; 
AiC_times_qC( i?: number, q?: any ): any; 
AiN_times_qN( i?: number, q?: any ): any; 
pN_equals_ANC_times_qC( p?: any, q?: any ): void; 
pN_plusequals_ANi( p?: any, i?: number, sign?: number ): void; 
pC_plusequals_s_times_qC( p?: any, s?: any, q?: any ): void; 
pN_plusequals_s_times_qN( p?: any, s?: any, q?: any ): void; 
solve1( a?: any, i?: number, dir?: number, only_transfer?: number ): void; 
unpermute(  ): void; 
 

                } 

            }
        