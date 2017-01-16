
            declare namespace Ammo { 

                export class btHashInt { 

                    constructor( uid?: number ); 

                    m_uid: number; 
 

                    getUid1(  ): number; 
setUid1( uid?: number ): void; 
equals( other?: btHashInt ): boolean; 
getHash(  ): number; 
 

                } 

            }
        