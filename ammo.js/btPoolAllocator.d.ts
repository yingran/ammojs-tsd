
            declare namespace Ammo { 

                export class btPoolAllocator { 

                    constructor( elemSize?: number, maxElements?: number ); 

                    m_elemSize: number; 
m_maxElements: number; 
m_freeCount: number; 
m_firstFree: any; 
m_pool: any; 
 

                    getFreeCount(  ): number; 
getUsedCount(  ): number; 
getMaxCount(  ): number; 
allocate( size?: number ): any; 
validPtr( ptr?: void ): boolean; 
freeMemory( ptr?: void ): void; 
getElementSize(  ): number; 
getPoolAddress(  ): any; 
getPoolAddress(  ): any; 
 

                } 

            }
        