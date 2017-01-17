
            declare namespace Ammo { 

                export class btIDebugDraw { 

                    constructor(  ); 

                     

                    getDefaultColors(  ): any; 
setDefaultColors( arg1?: any ): void; 
drawLine( from?: btVector3, to?: btVector3, color?: btVector3 ): void; 
drawLine( from?: btVector3, to?: btVector3, fromColor?: btVector3, toColor?: btVector3 ): void; 
drawSphere( radius?: any, transform?: btTransform, color?: btVector3 ): void; 
drawSphere( p?: btVector3, radius?: any, color?: btVector3 ): void; 
drawTriangle( v0?: btVector3, v1?: btVector3, v2?: btVector3, arg4?: btVector3, arg5?: btVector3, arg6?: btVector3, color?: btVector3, alpha?: any ): void; 
drawTriangle( v0?: btVector3, v1?: btVector3, v2?: btVector3, color?: btVector3, btScalar?: any ): void; 
drawContactPoint( PointOnB?: btVector3, normalOnB?: btVector3, distance?: any, lifeTime?: number, color?: btVector3 ): void; 
reportErrorWarning( warningString?: string ): void; 
draw3dText( location?: btVector3, textString?: string ): void; 
setDebugMode( debugMode?: number ): void; 
getDebugMode(  ): number; 
drawAabb( from?: btVector3, to?: btVector3, color?: btVector3 ): void; 
drawTransform( transform?: btTransform, orthoLen?: any ): void; 
drawArc( center?: btVector3, normal?: btVector3, axis?: btVector3, radiusA?: any, radiusB?: any, minAngle?: any, maxAngle?: any, color?: btVector3, drawSect?: boolean, stepDegrees?: any ): void; 
drawSpherePatch( center?: btVector3, up?: btVector3, axis?: btVector3, radius?: any, minTh?: any, maxTh?: any, minPs?: any, maxPs?: any, color?: btVector3, stepDegrees?: any ): void; 
drawBox( bbMin?: btVector3, bbMax?: btVector3, color?: btVector3 ): void; 
drawBox( bbMin?: btVector3, bbMax?: btVector3, trans?: btTransform, color?: btVector3 ): void; 
drawCapsule( radius?: any, halfHeight?: any, upAxis?: number, transform?: btTransform, color?: btVector3 ): void; 
drawCylinder( radius?: any, halfHeight?: any, upAxis?: number, transform?: btTransform, color?: btVector3 ): void; 
drawCone( radius?: any, height?: any, upAxis?: number, transform?: btTransform, color?: btVector3 ): void; 
drawPlane( planeNormal?: btVector3, planeConst?: any, transform?: btTransform, color?: btVector3 ): void; 
flushLines(  ): void; 
 

                } 

            }
        