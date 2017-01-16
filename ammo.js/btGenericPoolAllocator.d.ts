
            declare namespace Ammo { 

                export class btGenericPoolAllocator { 

                    constructor( pool_element_size?: any, pool_element_count?: any ); 

                    m_pools: btGenericMemoryPool; 
m_pool_count: any; 
m_pool_element_size: any; 
m_pool_element_count: any; 
 

                    get_pool_capacity(  ): any; 
allocate( size_bytes?: any ): any; 
freeMemory( pointer?: void ): boolean; 
push_new_pool(  ): btGenericMemoryPool; 
failback_alloc( size_bytes?: any ): any; 
failback_free( pointer?: void ): boolean; 
 

                } 

            }
        