
            declare namespace Ammo { 

                export class btPointCollector { 

                    constructor(  ); 

                    m_normalOnBInWorld: btVector3; 
m_pointInWorld: btVector3; 
m_distance: any; 
m_hasResult: boolean; 
 

                    setShapeIdentifiersA( partId0?: number, index0?: number ): void; 
setShapeIdentifiersB( partId1?: number, index1?: number ): void; 
addContactPoint( normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any ): void; 
Result(  ): any; 
 

                } 

            }
        