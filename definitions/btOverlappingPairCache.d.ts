
            declare namespace Ammo { 

                export class btOverlappingPairCache { 

                    constructor(  ); 

                     

                    getOverlappingPairArrayPtr(  ): btBroadphasePair; 
getOverlappingPairArrayPtr(  ): btBroadphasePair; 
getOverlappingPairArray(  ): btBroadphasePairArray; 
cleanOverlappingPair( pair?: btBroadphasePair, dispatcher?: btDispatcher ): void; 
getNumOverlappingPairs(  ): number; 
cleanProxyFromPairs( proxy?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
setOverlapFilterCallback( callback?: btOverlapFilterCallback ): void; 
processAllOverlappingPairs( arg1?: btOverlapCallback, dispatcher?: btDispatcher ): void; 
findPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): btBroadphasePair; 
hasDeferredRemoval(  ): boolean; 
setInternalGhostPairCallback( ghostPairCallback?: btOverlappingPairCallback ): void; 
sortOverlappingPairs( dispatcher?: btDispatcher ): void; 
btOverlappingPairCallback(  ): any; 
addOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): btBroadphasePair; 
removeOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher ): any; 
removeOverlappingPairsContainingProxy( proxy0?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
 

                } 

            }
        