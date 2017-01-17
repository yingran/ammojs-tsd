
            declare namespace Ammo { 

                export class btConvexTriangleCallback { 

                    constructor( dispatcher?: btDispatcher, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean ); 

                    m_triangleCount: number; 
m_manifoldPtr: btPersistentManifold; 
m_convexBodyWrap: btCollisionObjectWrapper; 
m_triBodyWrap: btCollisionObjectWrapper; 
m_aabbMin: btVector3; 
m_aabbMax: btVector3; 
m_resultOut: btManifoldResult; 
m_dispatcher: btDispatcher; 
m_dispatchInfoPtr: btDispatcherInfo; 
m_collisionMarginTriangle: any; 
 

                    setTimeStepAndCounters( collisionMarginTriangle?: any, dispatchInfo?: btDispatcherInfo, convexBodyWrap?: btCollisionObjectWrapper, triBodyWrap?: btCollisionObjectWrapper, resultOut?: btManifoldResult ): void; 
clearWrapperData(  ): void; 
processTriangle( triangle?: btVector3, partId?: number, triangleIndex?: number ): void; 
clearCache(  ): void; 
getAabbMin(  ): btVector3; 
getAabbMax(  ): btVector3; 
btTriangleCallback(  ): any; 
 

                } 

            }
        