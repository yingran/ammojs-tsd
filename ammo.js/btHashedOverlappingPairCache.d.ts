
            declare namespace Ammo { 

                export class btHashedOverlappingPairCache { 

                    constructor(  ); 

                    m_hashTable: any; 
m_next: any; 
m_ghostPairCallback: btOverlappingPairCallback; 
m_overlappingPairArray: btBroadphasePairArray; 
m_overlapFilterCallback: btOverlapFilterCallback; 
m_blockedForChanges: boolean; 
 

                    removeOverlappingPairsContainingProxy( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
removeOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher ): any; 
needsBroadphaseCollision( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): boolean; 
addOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): btBroadphasePair; 
cleanProxyFromPairs( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
processAllOverlappingPairs( arg1?: btOverlapCallback, dispatcher?: btDispatcher ): void; 
getOverlappingPairArrayPtr(  ): btBroadphasePair; 
getOverlappingPairArrayPtr(  ): btBroadphasePair; 
getOverlappingPairArray(  ): btBroadphasePairArray; 
getOverlappingPairArray(  ): btBroadphasePairArray; 
cleanOverlappingPair( pair?: btBroadphasePair, dispatcher?: btDispatcher ): void; 
findPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): btBroadphasePair; 
GetCount(  ): number; 
getOverlapFilterCallback(  ): btOverlapFilterCallback; 
setOverlapFilterCallback( callback?: btOverlapFilterCallback ): void; 
getNumOverlappingPairs(  ): number; 
btOverlappingPairCache(  ): any; 
btOverlappingPairCallback(  ): any; 
internalAddPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): btBroadphasePair; 
growTables(  ): void; 
equalsPair( pair?: btBroadphasePair, proxyId1?: number, proxyId2?: number ): boolean; 
getHash( proxyId1?: number, proxyId2?: number ): number; 
internalFindPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, hash?: number ): btBroadphasePair; 
hasDeferredRemoval(  ): boolean; 
setInternalGhostPairCallback( ghostPairCallback?: btOverlappingPairCallback ): void; 
sortOverlappingPairs( dispatcher?: btDispatcher ): void; 
 

                } 

            }
        