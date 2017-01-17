
            declare namespace Ammo { 

                export class btDefaultMotionState { 

                    constructor( startTrans?: btTransform ); 

                    m_graphicsWorldTrans: btTransform; 
m_centerOfMassOffset: btTransform; 
m_startWorldTrans: btTransform; 
m_userPointer: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
getWorldTransform( centerOfMassWorldTrans?: btTransform ): void; 
setWorldTransform( centerOfMassWorldTrans?: btTransform ): void; 
btMotionState(  ): any; 
 

                } 

            }
        