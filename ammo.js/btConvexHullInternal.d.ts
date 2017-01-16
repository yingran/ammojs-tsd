
            declare namespace Ammo { 

                export class btConvexHullInternal { 

                    constructor(  ); 

                    vertexList: any; 
scaling: btVector3; 
center: btVector3; 
vertexPool: any; 
edgePool: any; 
facePool: any; 
originalVertices: any; 
mergeStamp: number; 
minAxis: number; 
medAxis: number; 
maxAxis: number; 
usedEdgePairs: number; 
maxUsedEdgePairs: number; 
 

                    compute( coords?: void, doubleCoords?: boolean, stride?: number, count?: number ): void; 
getCoordinates( v?: any ): btVector3; 
shrink( amount?: any, clampAmount?: any ): any; 
findMaxAngle( ccw?: boolean, start?: any, s?: any, rxs?: any, sxrxs?: any, minCot?: any ): any; 
findEdgeForCoplanarFaces( c0?: any, c1?: any, e0?: any, e1?: any, stop0?: any, stop1?: any ): void; 
newEdgePair( from?: any, to?: any ): any; 
removeEdgePair( edge?: any ): void; 
computeInternal( start?: number, end?: number, result?: any ): void; 
mergeProjection( h0?: any, h1?: any, c0?: any, c1?: any ): boolean; 
merge( h0?: any, h1?: any ): void; 
toBtVector( v?: any ): btVector3; 
getBtNormal( face?: any ): btVector3; 
shiftFace( face?: any, amount?: any, stack?: any ): boolean; 
 

                } 

            }
        