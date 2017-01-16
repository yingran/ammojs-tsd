
            declare namespace Ammo { 

                export class btSimpleBroadphaseProxy { 

                    constructor( minpt?: btVector3, maxpt?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapProxy?: void ); 

                    m_nextFree: number; 
m_clientObject: any; 
m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
m_multiSapParentProxy: any; 
m_uniqueId: number; 
m_aabbMin: btVector3; 
m_aabbMax: btVector3; 
 

                    SetNextFree( next?: number ): void; 
GetNextFree(  ): number; 
BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getUid(  ): number; 
btBroadphaseProxy(  ): any; 
btBroadphaseProxy( aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapParentProxy?: void ): any; 
 

                } 

            }
        