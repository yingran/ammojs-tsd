
            declare namespace Ammo { 

                export class btContactArray { 

                    constructor(  ); 

                     

                    push_contact( point?: btVector3, normal?: btVector3, depth?: any, feature1?: number, feature2?: number ): void; 
push_triangle_contacts( tricontact?: any, feature1?: number, feature2?: number ): void; 
merge_contacts( contacts?: btContactArray, normal_contact_average?: boolean ): void; 
merge_contacts_unique( contacts?: btContactArray ): void; 
btAlignedObjectArray(  ): any; 
btAlignedObjectArray( otherArray?: btAlignedObjectArray ): any; 
btAlignedObjectArray(  ): any; 
size(  ): number; 
at( n?: number ): any; 
at( n?: number ): any; 
clear(  ): void; 
pop_back(  ): void; 
resizeNoInitialize( newsize?: number ): void; 
resize( newsize?: number, fillData?: any ): void; 
expandNonInitializing(  ): any; 
expand( fillValue?: any ): any; 
push_back( _Val?: any ): void; 
capacity(  ): number; 
reserve( _Count?: number ): void; 
quickSortInternal( CompareFunc?: any, lo?: number, hi?: number ): void; 
quickSort( CompareFunc?: any ): void; 
downHeap( pArr?: any, k?: number, n?: number, CompareFunc?: any ): void; 
swap( index0?: number, index1?: number ): void; 
heapSort( CompareFunc?: any ): void; 
findBinarySearch( key?: any ): number; 
findLinearSearch( key?: any ): number; 
remove( key?: any ): void; 
initializeFromBuffer( buffer?: void, size?: number, capacity?: number ): void; 
copyFromArray( otherArray?: btAlignedObjectArray ): void; 
 

                } 

            }
        