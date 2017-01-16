
            declare namespace Ammo { 

                export class btManifoldPoint { 

                    constructor( pointA?: btVector3, pointB?: btVector3, normal?: btVector3, distance?: any ); 

                    m_localPointA: btVector3; 
m_localPointB: btVector3; 
m_positionWorldOnB: btVector3; 
m_positionWorldOnA: btVector3; 
m_normalWorldOnB: btVector3; 
m_distance1: any; 
m_combinedFriction: any; 
m_combinedRollingFriction: any; 
m_combinedRestitution: any; 
m_partId0: number; 
m_partId1: number; 
m_index0: number; 
m_index1: number; 
m_userPersistentData: any; 
m_lateralFrictionInitialized: boolean; 
m_appliedImpulse: any; 
m_appliedImpulseLateral1: any; 
m_appliedImpulseLateral2: any; 
m_contactMotion1: any; 
m_contactMotion2: any; 
m_contactCFM1: any; 
m_contactCFM2: any; 
m_lifeTime: number; 
m_lateralFrictionDir1: btVector3; 
m_lateralFrictionDir2: btVector3; 
 

                    getDistance(  ): any; 
getLifeTime(  ): number; 
getPositionWorldOnA(  ): btVector3; 
getPositionWorldOnB(  ): btVector3; 
setDistance( dist?: any ): void; 
getAppliedImpulse(  ): any; 
 

                } 

            }
        