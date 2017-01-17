
            declare namespace Ammo { 

                export class btConvexHullComputer { 

                    constructor(  ); 

                    vertices: any; 
edges: any; 
faces: any; 
 

                    compute( coords?: number, stride?: number, count?: number, shrink?: any, shrinkClamp?: any ): any; 
compute( coords?: any, stride?: number, count?: number, shrink?: any, shrinkClamp?: any ): any; 
compute( coords?: void, doubleCoords?: boolean, stride?: number, count?: number, shrink?: any, shrinkClamp?: any ): any; 
 

                } 

            }
        