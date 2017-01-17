
            declare namespace Ammo { 

                export class RemovePairContainingProxy { 

                    constructor(  ); 

                    m_targetProxy: btBroadphaseProxy; 
 

                    processOverlap( pair?: btBroadphasePair ): boolean; 
 

                } 

            }
        