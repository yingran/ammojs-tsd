
            declare namespace Ammo { 

                export class btTriangleInfoMap { 

                    constructor(  ); 

                    m_convexEpsilon: any; 
m_planarEpsilon: any; 
m_equalVertexThreshold: any; 
m_edgeDistanceThreshold: any; 
m_maxEdgeAngleThreshold: any; 
m_zeroAreaThreshold: any; 
 

                    calculateSerializeBufferSize(  ): number; 
serialize( dataBuffer?: void, serializer?: btSerializer ): any; 
deSerialize( data?: btTriangleInfoMapData ): void; 
insert( key?: any, value?: any ): void; 
remove( key?: any ): void; 
size(  ): number; 
getAtIndex( index?: number ): any; 
getAtIndex( index?: number ): any; 
find( key?: any ): any; 
find( key?: any ): any; 
findIndex( key?: any ): number; 
clear(  ): void; 
 

                } 

            }
        