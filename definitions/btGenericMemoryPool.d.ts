
            declare namespace Ammo { 

                export class btGenericMemoryPool { 

                    constructor( element_size?: any, element_count?: any ); 

                    m_pool: any; 
m_free_nodes: any; 
m_allocated_sizes: any; 
m_allocated_count: any; 
m_free_nodes_count: any; 
m_element_size: any; 
m_max_element_count: any; 
 

                    init_pool( element_size?: any, element_count?: any ): void; 
end_pool(  ): void; 
get_pool_capacity(  ): any; 
gem_element_size(  ): any; 
get_max_element_count(  ): any; 
get_allocated_count(  ): any; 
get_free_positions_count(  ): any; 
get_element_data( element_index?: any ): any; 
allocate( size_bytes?: any ): any; 
freeMemory( pointer?: void ): boolean; 
allocate_from_free_nodes( num_elements?: any ): any; 
allocate_from_pool( num_elements?: any ): any; 
 

                } 

            }
        