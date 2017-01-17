
            declare namespace Ammo { 

                export class HullDesc { 

                    constructor( flag?: any, vcount?: number, vertices?: btVector3, stride?: number ); 

                    mFlags: number; 
mVcount: number; 
mVertices: btVector3; 
mVertexStride: number; 
mNormalEpsilon: any; 
mMaxVertices: number; 
mMaxFaces: number; 
 

                    HasHullFlag( flag?: any ): boolean; 
SetHullFlag( flag?: any ): void; 
ClearHullFlag( flag?: any ): void; 
 

                } 

            }
        