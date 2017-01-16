
            declare namespace Ammo { 

                export class btSimulationIslandManager { 

                    constructor(  ); 

                    m_unionFind: btUnionFind; 
m_islandmanifold: any; 
m_islandBodies: any; 
m_splitIslands: boolean; 
 

                    initUnionFind( n?: number ): void; 
getUnionFind(  ): btUnionFind; 
updateActivationState( colWorld?: btCollisionWorld, dispatcher?: btDispatcher ): void; 
storeIslandActivationState( world?: btCollisionWorld ): void; 
findUnions( dispatcher?: btDispatcher, colWorld?: btCollisionWorld ): void; 
buildAndProcessIslands( dispatcher?: btDispatcher, collisionWorld?: btCollisionWorld, callback?: any ): void; 
buildIslands( dispatcher?: btDispatcher, colWorld?: btCollisionWorld ): void; 
getSplitIslands(  ): boolean; 
setSplitIslands( doSplitIslands?: boolean ): void; 
 

                } 

            }
        