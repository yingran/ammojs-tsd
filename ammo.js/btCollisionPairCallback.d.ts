
            declare namespace Ammo { 

                export class btCollisionPairCallback { 

                    constructor( dispatchInfo?: btDispatcherInfo, dispatcher?: btCollisionDispatcher ); 

                    m_dispatchInfo: btDispatcherInfo; 
m_dispatcher: btCollisionDispatcher; 
 

                    processOverlap( pair?: btBroadphasePair ): boolean; 
btOverlapCallback(  ): any; 
 

                } 

            }
        