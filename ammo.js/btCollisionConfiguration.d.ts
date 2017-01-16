
            declare namespace Ammo { 

                export class btCollisionConfiguration { 

                    constructor(  ); 

                     

                    getPersistentManifoldPool(  ): btPoolAllocator; 
getCollisionAlgorithmPool(  ): btPoolAllocator; 
getCollisionAlgorithmCreateFunc( proxyType0?: number, proxyType1?: number ): btCollisionAlgorithmCreateFunc; 
 

                } 

            }
        