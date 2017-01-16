
            declare namespace Ammo { 

                export class btOverlappingPairCallback { 

                    constructor(  ); 

                     

                    addOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy ): btBroadphasePair; 
removeOverlappingPair( proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher ): any; 
removeOverlappingPairsContainingProxy( proxy0?: btBroadphaseProxy, dispatcher?: btDispatcher ): void; 
 

                } 

            }
        