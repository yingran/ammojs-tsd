
            declare namespace Ammo { 

                export class btSpatialMotionVector { 

                    constructor( angular?: btVector3, linear?: btVector3 ); 

                    m_topVec: btVector3; 
m_bottomVec: btVector3; 
 

                    setVector( angular?: btVector3, linear?: btVector3 ): void; 
setValue( ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any ): void; 
addVector( angular?: btVector3, linear?: btVector3 ): void; 
addValue( ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any ): void; 
getAngular(  ): btVector3; 
getLinear(  ): btVector3; 
setAngular( angular?: btVector3 ): void; 
setLinear( linear?: btVector3 ): void; 
addAngular( angular?: btVector3 ): void; 
addLinear( linear?: btVector3 ): void; 
setZero(  ): void; 
dot( b?: btSpatialForceVector ): any; 
 

                } 

            }
        