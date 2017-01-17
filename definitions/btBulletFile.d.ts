
            declare namespace Ammo { 

                export class btBulletFile { 

                    constructor( memoryBuffer?: string, len?: number ); 

                    m_multiBodies: any; 
m_softBodies: any; 
m_rigidBodies: any; 
m_collisionObjects: any; 
m_collisionShapes: any; 
m_constraints: any; 
m_bvhs: any; 
m_triangleInfoMaps: any; 
m_dynamicsWorldInfo: any; 
m_dataBlocks: any; 
m_DnaCopy: any; 
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
 

                    addDataBlock( dataBlock?: string ): void; 
write( fileName?: string, fixupPointers?: boolean ): number; 
parse( verboseMode?: number ): void; 
parseData(  ): void; 
writeDNA( fp?: any ): void; 
addStruct( structType?: string, data?: void, len?: number, oldPtr?: void, code?: number ): void; 
bFile( filename?: string, headerString?: string ): any; 
bFile( memoryBuffer?: string, len?: number, headerString?: string ): any; 
bFile(  ): any; 
getFileDNA(  ): bDNA; 
getFlags(  ): number; 
setFileDNAisMemoryDNA(  ): void; 
getLibPointers(  ): bPtrMap; 
findLibPointer( ptr?: void ): any; 
ok(  ): boolean; 
writeChunks( fp?: any, fixupPointers?: boolean ): void; 
updateOldPointers(  ): void; 
resolvePointers( verboseMode?: number ): void; 
dumpChunks( dna?: bDNA ): void; 
setFileDNA( verboseMode?: number, buffer?: string, len?: number ): void; 
getVersion(  ): number; 
preSwap(  ): void; 
writeFile( fileName?: string ): void; 
 

                } 

            }
        