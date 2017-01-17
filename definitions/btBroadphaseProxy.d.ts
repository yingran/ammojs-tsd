
            declare namespace Ammo { 

                export class btBroadphaseProxy { 

                    constructor( aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapParentProxy?: void ); 

                    m_clientObject: any; 
m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
m_multiSapParentProxy: any; 
m_uniqueId: number; 
m_aabbMin: btVector3; 
m_aabbMax: btVector3; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getUid(  ): number; 
 

                } 

            }
        