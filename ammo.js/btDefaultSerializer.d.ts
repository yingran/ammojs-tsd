
            declare namespace Ammo { 

                export class btDefaultSerializer { 

                    constructor( totalSize?: number, buffer?: string ); 

                    m_skipPointers: any; 
mTypes: any; 
mStructs: any; 
mTlens: any; 
mStructReverse: any; 
mTypeLookup: any; 
m_chunkP: any; 
m_nameMap: any; 
m_uniquePointers: any; 
m_uniqueIdGenerator: number; 
m_totalSize: number; 
m_buffer: any; 
m_ownsBuffer: boolean; 
m_currentSize: number; 
m_dna: any; 
m_dnaLength: number; 
m_serializationFlags: number; 
m_chunkPtrs: any; 
 

                    insertHeader(  ): void; 
writeHeader( buffer?: string ): void; 
startSerialization(  ): void; 
finishSerialization(  ): void; 
getUniquePointer( oldPtr?: void ): any; 
getBufferPointer(  ): any; 
getCurrentBufferSize(  ): number; 
finalizeChunk( chunk?: btChunk, structType?: string, chunkCode?: number, oldPtr?: void ): void; 
internalAlloc( size?: any ): any; 
allocate( size?: any, numElements?: number ): btChunk; 
findNameForPointer( ptr?: void ): any; 
registerNameForPointer( ptr?: void, name?: string ): void; 
serializeName( name?: string ): void; 
getSerializationFlags(  ): number; 
setSerializationFlags( flags?: number ): void; 
getNumChunks(  ): number; 
getChunk( chunkIndex?: number ): btChunk; 
btSerializer(  ): any; 
findPointer( oldPtr?: void ): any; 
writeDNA(  ): void; 
getReverseType( type?: string ): number; 
initDNA( bdnaOrg?: string, dnalen?: number ): void; 
 

                } 

            }
        