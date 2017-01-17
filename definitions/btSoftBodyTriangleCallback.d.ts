
            declare namespace Ammo { 

                export class btSoftBodyTriangleCallback { 

                    constructor( dispatcher?: btDispatcher, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean ); 

                    m_triangleCount: number; 
m_softBody: btSoftBody; 
m_triBody: btCollisionObject; 
m_aabbMin: btVector3; 
m_aabbMax: btVector3; 
m_resultOut: btManifoldResult; 
m_dispatcher: btDispatcher; 
m_dispatchInfoPtr: btDispatcherInfo; 
m_collisionMarginTriangle: any; 
m_shapeCache: any; 
 

                    setTimeStepAndCounters( collisionMarginTriangle?: any, triObjWrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
clearCache(  ): void; 
getAabbMin(  ): btVector3; 
getAabbMax(  ): btVector3; 
btTriangleCallback(  ): any; 
 

                } 

            }
        