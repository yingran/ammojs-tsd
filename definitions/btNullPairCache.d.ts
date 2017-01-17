
            declare namespace Ammo { 

                export class btNullPairCache { 

                    constructor(  ); 

                    m_overlappingPairArray: btBroadphasePairArray; 
 

                    getOverlappingPairArrayPtr(  ): btBroadphasePair; 
getOverlappingPairArrayPtr(  ): btBroadphasePair; 
getOverlappingPairArray(  ): btBroadphasePairArray; 
cleanOverlappingPair( arg1?: btBroadphasePair, arg2?: btDispatcher ): void; 
getNumOverlappingPairs(  ): number; 
cleanProxyFromPairs( arg1?: btBroadphaseProxy, arg2?: btDispatcher ): void; 
setOverlapFilterCallback( arg1?: btOverlapFilterCallback ): void; 
processAllOverlappingPairs( arg1?: btOverlapCallback, arg2?: btDispatcher ): void; 
findPair( arg1?: btBroadphaseProxy, arg2?: btBroadphaseProxy ): btBroadphasePair; 
hasDeferredRemoval(  ): boolean; 
setInternalGhostPairCallback( arg1?: btOverlappingPairCallback ): void; 
addOverlappingPair( arg1?: btBroadphaseProxy, arg2?: btBroadphaseProxy ): btBroadphasePair; 
removeOverlappingPair( arg1?: btBroadphaseProxy, arg2?: btBroadphaseProxy, arg3?: btDispatcher ): any; 
removeOverlappingPairsContainingProxy( arg1?: btBroadphaseProxy, arg2?: btDispatcher ): void; 
sortOverlappingPairs( dispatcher?: btDispatcher ): void; 
btOverlappingPairCache(  ): any; 
btOverlappingPairCallback(  ): any; 
 

                } 

            }
        