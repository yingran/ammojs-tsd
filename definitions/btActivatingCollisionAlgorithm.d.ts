
            declare namespace Ammo { 

                export class btActivatingCollisionAlgorithm { 

                    constructor( ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper ); 

                     

                    btCollisionAlgorithm(  ): any; 
btCollisionAlgorithm( ci?: btCollisionAlgorithmConstructionInfo ): any; 
btCollisionAlgorithm(  ): any; 
processCollision( body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): void; 
calculateTimeOfImpact( body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult ): any; 
getAllContactManifolds( manifoldArray?: btManifoldArray ): void; 
 

                } 

            }
        