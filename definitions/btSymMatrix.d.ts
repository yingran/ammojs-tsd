
            declare namespace Ammo { 

                export class btSymMatrix { 

                    constructor( n?: number, init?: any ); 

                    store: any; 
dim: number; 
 

                    resize( n?: number, init?: any ): void; 
index( c?: number, r?: number ): number; 
 

                } 

            }
        