
            declare namespace Ammo { 

                export class btHashString { 

                    constructor( name?: string ); 

                    m_string: any; 
m_hash: number; 
 

                    getHash(  ): number; 
portableStringCompare( src?: string, dst?: string ): number; 
equals( other?: btHashString ): boolean; 
 

                } 

            }
        