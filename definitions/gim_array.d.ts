
            declare namespace Ammo { 

                export class gim_array { 

                    constructor( reservesize?: any ); 

                    m_data: any; 
m_size: any; 
m_allocated_size: any; 
 

                    destroyData(  ): void; 
resizeData( newsize?: any ): boolean; 
growingCheck(  ): boolean; 
reserve( size?: any ): boolean; 
clear_range( start_range?: any ): void; 
clear(  ): void; 
clear_memory(  ): void; 
size(  ): any; 
max_size(  ): any; 
pointer(  ): any; 
pointer(  ): any; 
get_pointer_at( i?: any ): any; 
get_pointer_at( i?: any ): any; 
at( i?: any ): any; 
at( i?: any ): any; 
front(  ): any; 
front(  ): any; 
back(  ): any; 
back(  ): any; 
swap( i?: any, j?: any ): void; 
push_back( obj?: any ): void; 
push_back_mem(  ): void; 
push_back_memcpy( obj?: any ): void; 
pop_back(  ): void; 
pop_back_mem(  ): void; 
erase( index?: any ): void; 
erase_sorted_mem( index?: any ): void; 
erase_sorted( index?: any ): void; 
insert_mem( index?: any ): void; 
insert( obj?: any, index?: any ): void; 
resize( size?: any, call_constructor?: boolean, fillData?: any ): void; 
refit(  ): void; 
 

                } 

            }
        