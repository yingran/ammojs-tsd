
            declare namespace Ammo { 

                export class btStackAlloc { 

                    constructor( size?: number ); 

                    data: any; 
totalsize: number; 
usedsize: number; 
current: btBlock; 
ischild: boolean; 
 

                    create( size?: number ): void; 
destroy(  ): void; 
getAvailableMemory(  ): number; 
allocate( size?: number ): any; 
beginBlock(  ): btBlock; 
endBlock( block?: btBlock ): void; 
ctor(  ): void; 
 

                } 

            }
        