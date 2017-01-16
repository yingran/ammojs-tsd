
            declare namespace Ammo { 

                export class Pool { 

                    constructor(  ); 

                    arrays: any; 
nextArray: any; 
freeObjects: any; 
arraySize: number; 
 

                    reset(  ): void; 
setArraySize( arraySize?: number ): void; 
newObject(  ): any; 
freeObject( object?: any ): void; 
 

                } 

            }
        