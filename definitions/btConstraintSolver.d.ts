
            declare namespace Ammo { 

                export class btConstraintSolver { 

                    constructor(  ); 

                     

                    prepareSolve( int?: any, int?: any ): void; 
solveGroup( bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher ): any; 
allSolved( arg1?: btContactSolverInfo, arg2?: btIDebugDraw ): void; 
reset(  ): void; 
getSolverType(  ): btConstraintSolverType; 
 

                } 

            }
        