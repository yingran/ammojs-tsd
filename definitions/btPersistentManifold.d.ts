
            declare namespace Ammo { 

                export class btPersistentManifold { 

                    constructor( body0?: btCollisionObject, body1?: btCollisionObject, int?: any, contactBreakingThreshold?: any, contactProcessingThreshold?: any ); 

                    m_companionIdA: number; 
m_companionIdB: number; 
m_index1a: number; 
m_objectType: number; 
m_pointCache: btManifoldPoint; 
m_body0: btCollisionObject; 
m_body1: btCollisionObject; 
m_cachedPoints: number; 
m_contactBreakingThreshold: any; 
m_contactProcessingThreshold: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getBody0(  ): btCollisionObject; 
getBody1(  ): btCollisionObject; 
setBodies( body0?: btCollisionObject, body1?: btCollisionObject ): void; 
clearUserCache( pt?: btManifoldPoint ): void; 
getNumContacts(  ): number; 
setNumContacts( cachedPoints?: number ): void; 
getContactPoint( index?: number ): btManifoldPoint; 
getContactPoint( index?: number ): btManifoldPoint; 
getContactBreakingThreshold(  ): any; 
getContactProcessingThreshold(  ): any; 
setContactBreakingThreshold( contactBreakingThreshold?: any ): void; 
setContactProcessingThreshold( contactProcessingThreshold?: any ): void; 
getCacheEntry( newPoint?: btManifoldPoint ): number; 
addManifoldPoint( newPoint?: btManifoldPoint, isPredictive?: boolean ): number; 
removeContactPoint( index?: number ): void; 
replaceContactPoint( newPoint?: btManifoldPoint, insertIndex?: number ): void; 
validContactDistance( pt?: btManifoldPoint ): boolean; 
refreshContactPoints( trA?: btTransform, trB?: btTransform ): void; 
clearManifold(  ): void; 
btTypedObject( objectType?: number ): any; 
getObjectType(  ): number; 
sortCachedPoints( pt?: btManifoldPoint ): number; 
findContactPoint( unUsed?: btManifoldPoint, numUnused?: number, pt?: btManifoldPoint ): number; 
 

                } 

            }
        