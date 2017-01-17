
            declare namespace Ammo { 

                export class btSpatialForceVector { 

                    constructor( ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any ); 

                    m_topVec: btVector3; 
m_bottomVec: btVector3; 
 

                    setVector( angular?: btVector3, linear?: btVector3 ): void; 
setValue( ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any ): void; 
addVector( angular?: btVector3, linear?: btVector3 ): void; 
addValue( ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any ): void; 
getLinear(  ): btVector3; 
getAngular(  ): btVector3; 
setLinear( linear?: btVector3 ): void; 
setAngular( angular?: btVector3 ): void; 
addAngular( angular?: btVector3 ): void; 
addLinear( linear?: btVector3 ): void; 
setZero(  ): void; 
 

                } 

            }
        