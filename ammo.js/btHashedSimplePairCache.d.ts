
            declare namespace Ammo { 

                export class btHashedSimplePairCache { 

                    constructor(  ); 

                    m_hashTable: any; 
m_next: any; 
m_overlappingPairArray: btSimplePairArray; 
m_blockedForChanges: boolean; 
 

                    removeAllPairs(  ): void; 
removeOverlappingPair( indexA?: number, indexB?: number ): any; 
addOverlappingPair( indexA?: number, indexB?: number ): btSimplePair; 
getOverlappingPairArrayPtr(  ): btSimplePair; 
getOverlappingPairArrayPtr(  ): btSimplePair; 
getOverlappingPairArray(  ): btSimplePairArray; 
getOverlappingPairArray(  ): btSimplePairArray; 
findPair( indexA?: number, indexB?: number ): btSimplePair; 
GetCount(  ): number; 
getNumOverlappingPairs(  ): number; 
internalAddPair( indexA?: number, indexB?: number ): btSimplePair; 
growTables(  ): void; 
equalsPair( pair?: btSimplePair, indexA?: number, indexB?: number ): boolean; 
getHash( indexA?: number, indexB?: number ): number; 
internalFindPair( proxyIdA?: number, proxyIdB?: number, hash?: number ): btSimplePair; 
 

                } 

            }
        