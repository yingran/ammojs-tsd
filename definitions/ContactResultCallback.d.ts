
            declare namespace Ammo { 

                export class ContactResultCallback { 

                    constructor(  ); 

                    m_collisionFilterGroup: number; 
m_collisionFilterMask: number; 
 

                    needsCollision( proxy0?: btBroadphaseProxy ): boolean; 
addSingleResult( cp?: btManifoldPoint, colObj0Wrap?: btCollisionObjectWrapper, partId0?: number, index0?: number, colObj1Wrap?: btCollisionObjectWrapper, partId1?: number, index1?: number ): any; 
 

                } 

            }
        