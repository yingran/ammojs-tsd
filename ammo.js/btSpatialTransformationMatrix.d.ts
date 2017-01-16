
            declare namespace Ammo { 

                export class btSpatialTransformationMatrix { 

                    constructor(  ); 

                    m_rotMat: btMatrix3x3; 
m_trnVec: btVector3; 
 

                    transformInverse( inMat?: btSymmetricSpatialDyad, outMat?: btSymmetricSpatialDyad, outOp?: any ): void; 
 

                } 

            }
        