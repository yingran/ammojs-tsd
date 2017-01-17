
            declare namespace Ammo { 

                export class btTriIndex { 

                    constructor( partId?: number, triangleIndex?: number, shape?: btCollisionShape ); 

                    m_PartIdTriangleIndex: number; 
m_childShape: btCollisionShape; 
 

                    getTriangleIndex(  ): number; 
getPartId(  ): number; 
getUid(  ): number; 
 

                } 

            }
        