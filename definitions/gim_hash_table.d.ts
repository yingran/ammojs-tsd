
            declare namespace Ammo { 

                export class gim_hash_table { 

                    constructor( reserve_size?: any, node_size?: any, min_hash_table_size?: any ); 

                    m_nodes: any; 
m_sorted: boolean; 
m_hash_table: any; 
m_table_size: any; 
m_node_size: any; 
m_min_hash_table_size: any; 
 

                    is_hash_table(  ): boolean; 
is_sorted(  ): boolean; 
sort(  ): boolean; 
switch_to_hashtable(  ): boolean; 
switch_to_sorted_array(  ): boolean; 
check_for_switching_to_hashtable(  ): boolean; 
set_sorted( value?: boolean ): void; 
size(  ): any; 
get_key( index?: any ): any; 
get_value_by_index( index?: any ): any; 
find( hashkey?: any ): any; 
get_value( hashkey?: any ): any; 
erase_by_index( index?: any ): boolean; 
erase_by_index_unsorted( index?: any ): boolean; 
erase_by_key( hashkey?: any ): boolean; 
clear(  ): void; 
insert( hashkey?: any, element?: any ): any; 
insert_override( hashkey?: any, element?: any ): any; 
insert_unsorted( hashkey?: any, element?: any ): any; 
_find_cell( hashkey?: any ): any; 
_find_avaliable_cell( hashkey?: any ): any; 
_reserve_table_memory( newtablesize?: any ): void; 
_invalidate_keys(  ): void; 
_clear_table_memory(  ): void; 
_rehash(  ): void; 
_resize_table( newsize?: any ): void; 
_destroy(  ): void; 
_assign_hash_table_cell( hashkey?: any ): any; 
_erase_by_index_hash_table( index?: any ): boolean; 
_erase_hash_table( hashkey?: any ): boolean; 
_insert_hash_table( hashkey?: any, value?: any ): any; 
_insert_hash_table_replace( hashkey?: any, value?: any ): any; 
_erase_sorted( index?: any ): boolean; 
_erase_unsorted( index?: any ): boolean; 
_insert_in_pos( hashkey?: any, value?: any, pos?: any ): void; 
_insert_sorted( hashkey?: any, value?: any ): any; 
_insert_sorted_replace( hashkey?: any, value?: any ): any; 
_insert_unsorted( hashkey?: any, value?: any ): any; 
 

                } 

            }
        