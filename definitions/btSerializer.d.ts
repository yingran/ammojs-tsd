
            declare namespace Ammo { 

                export class btSerializer { 

                    constructor(  ); 

                     

                    getBufferPointer(  ): any; 
getCurrentBufferSize(  ): number; 
allocate( size?: any, numElements?: number ): btChunk; 
finalizeChunk( chunk?: btChunk, structType?: string, chunkCode?: number, oldPtr?: void ): void; 
findPointer( oldPtr?: void ): any; 
getUniquePointer( oldPtr?: void ): any; 
startSerialization(  ): void; 
finishSerialization(  ): void; 
findNameForPointer( ptr?: void ): any; 
registerNameForPointer( ptr?: void, name?: string ): void; 
serializeName( ptr?: string ): void; 
getSerializationFlags(  ): number; 
setSerializationFlags( flags?: number ): void; 
getNumChunks(  ): number; 
getChunk( chunkIndex?: number ): btChunk; 
 

                } 

            }
        