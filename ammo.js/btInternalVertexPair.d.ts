
            declare namespace Ammo { 

                export class btInternalVertexPair { 

                    constructor( v0?: number, v1?: number ); 

                    m_v0: number; 
m_v1: number; 
 

                    getHash(  ): number; 
equals( other?: btInternalVertexPair ): boolean; 
 

                } 

            }
        