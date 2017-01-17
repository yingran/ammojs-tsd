
            declare namespace Ammo { 

                export class btGhostPairCallback { 

                    constructor(  ); 

                     

                    addOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): btBroadphasePair; 
removeOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher ): any; 
removeOverlappingPairsContainingProxy( arg1?: btBroadphaseProxy, arg2?: btDispatcher ): void; 
btOverlappingPairCallback(  ): any; 
 

                } 

            }
        