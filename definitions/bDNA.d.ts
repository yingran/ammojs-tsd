
            declare namespace Ammo { 

                export class bDNA { 

                    constructor(  ); 

                    mCMPFlags: any; 
m_Names: any; 
mTypes: any; 
mStructs: any; 
mTlens: any; 
mStructReverse: any; 
mTypeLookup: any; 
mPtrLen: number; 
 

                    init( data?: string, len?: number, swap?: boolean ): void; 
getArraySize( str?: string ): number; 
getArraySizeNew( name?: number ): number; 
getElementSize( type?: number, name?: number ): number; 
getNumNames(  ): number; 
getName( ind?: number ): any; 
getType( ind?: number ): any; 
getStruct( ind?: number ): any; 
getLength( ind?: number ): number; 
getReverseType( type?: number ): number; 
getReverseType( type?: string ): number; 
getNumStructs(  ): number; 
lessThan( other?: bDNA ): boolean; 
initCmpFlags( memDNA?: bDNA ): void; 
flagNotEqual( dna_nr?: number ): boolean; 
flagEqual( dna_nr?: number ): boolean; 
flagNone( dna_nr?: number ): boolean; 
getPointerSize(  ): number; 
dumpTypeDefinitions(  ): void; 
initRecurseCmpFlags( i?: number ): void; 
 

                } 

            }
        