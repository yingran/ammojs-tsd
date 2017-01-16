
            declare namespace Ammo { 

                export class bFile { 

                    constructor( memoryBuffer?: string, len?: number, headerString?: string ); 

                    m_headerString: string; 
mOwnsBuffer: boolean; 
mFileBuffer: any; 
mFileLen: number; 
mVersion: number; 
mLibPointers: bPtrMap; 
mDataStart: number; 
mFileDNA: bDNA; 
mMemoryDNA: bDNA; 
m_pointerFixupArray: any; 
m_pointerPtrFixupArray: any; 
m_chunks: any; 
m_chunkPtrPtrMap: any; 
mDataPointers: bPtrMap; 
mFlags: number; 
 

                    getFileDNA(  ): bDNA; 
addDataBlock( dataBlock?: string ): void; 
getFlags(  ): number; 
setFileDNAisMemoryDNA(  ): void; 
getLibPointers(  ): bPtrMap; 
findLibPointer( ptr?: void ): any; 
ok(  ): boolean; 
parse( verboseMode?: number ): void; 
write( fileName?: string, fixupPointers?: boolean ): number; 
writeChunks( fp?: any, fixupPointers?: boolean ): void; 
writeDNA( fp?: any ): void; 
updateOldPointers(  ): void; 
resolvePointers( verboseMode?: number ): void; 
dumpChunks( dna?: bDNA ): void; 
setFileDNA( verboseMode?: number, buffer?: string, len?: number ): void; 
getVersion(  ): number; 
preSwap(  ): void; 
writeFile( fileName?: string ): void; 
getNextBlock( dataChunk?: bChunkInd, dataPtr?: string, flags?: number ): number; 
safeSwapPtr( dst?: string, src?: string ): void; 
parseHeader(  ): void; 
parseData(  ): void; 
resolvePointersMismatch(  ): void; 
resolvePointersChunk( dataChunk?: bChunkInd, verboseMode?: number ): void; 
resolvePointersStructRecursive( strcPtr?: string, old_dna?: number, verboseMode?: number, recursion?: number ): number; 
parseStruct( strcPtr?: string, dtPtr?: string, old_dna?: number, new_dna?: number, fixupPointers?: boolean ): void; 
getMatchingFileDNA( old?: number, lookupName?: string, lookupType?: string, strcData?: string, data?: string, fixupPointers?: boolean ): void; 
getFileElement( firstStruct?: number, lookupName?: string, lookupType?: string, data?: string, foundPos?: number ): any; 
swap( head?: string, ch?: bChunkInd, ignoreEndianFlag?: boolean ): void; 
swapData( data?: string, type?: number, arraySize?: number, ignoreEndianFlag?: boolean ): void; 
swapStruct( dna_nr?: number, data?: string, ignoreEndianFlag?: boolean ): void; 
swapLen( dataPtr?: string ): void; 
swapDNA( ptr?: string ): void; 
readStruct( head?: string, chunk?: bChunkInd ): any; 
getAsString( code?: number ): any; 
parseInternal( verboseMode?: number, memDna?: string, memDnaLength?: number ): void; 
 

                } 

            }
        