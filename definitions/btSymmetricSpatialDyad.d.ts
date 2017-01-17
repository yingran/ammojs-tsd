
            declare namespace Ammo { 

                export class btSymmetricSpatialDyad { 

                    constructor( topLeftMat?: btMatrix3x3, topRightMat?: btMatrix3x3, bottomLeftMat?: btMatrix3x3 ); 

                    m_topLeftMat: btMatrix3x3; 
m_topRightMat: btMatrix3x3; 
m_bottomLeftMat: btMatrix3x3; 
 

                    setMatrix( topLeftMat?: btMatrix3x3, topRightMat?: btMatrix3x3, bottomLeftMat?: btMatrix3x3 ): void; 
addMatrix( topLeftMat?: btMatrix3x3, topRightMat?: btMatrix3x3, bottomLeftMat?: btMatrix3x3 ): void; 
setIdentity(  ): void; 
 

                } 

            }
        