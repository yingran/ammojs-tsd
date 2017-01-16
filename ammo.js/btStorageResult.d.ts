
            declare namespace Ammo { 

                export class btStorageResult { 

                    constructor(  ); 

                    m_normalOnSurfaceB: btVector3; 
m_closestPointInB: btVector3; 
m_distance: any; 
 

                    addContactPoint( normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any ): void; 
Result(  ): any; 
setShapeIdentifiersA( partId0?: number, index0?: number ): void; 
setShapeIdentifiersB( partId1?: number, index1?: number ): void; 
 

                } 

            }
        