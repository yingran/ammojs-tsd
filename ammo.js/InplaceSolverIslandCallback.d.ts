
            declare namespace Ammo { 

                export class InplaceSolverIslandCallback { 

                    constructor( solver?: btConstraintSolver, stackAlloc?: btStackAlloc, dispatcher?: btDispatcher ); 

                    m_solverInfo: btContactSolverInfo; 
m_solver: btConstraintSolver; 
m_sortedConstraints: btTypedConstraint; 
m_numConstraints: number; 
m_debugDrawer: btIDebugDraw; 
m_dispatcher: btDispatcher; 
m_bodies: any; 
m_manifolds: any; 
m_constraints: any; 
 

                    setup( solverInfo?: btContactSolverInfo, sortedConstraints?: btTypedConstraint, numConstraints?: number, debugDrawer?: btIDebugDraw ): void; 
processIsland( bodies?: btCollisionObject, numBodies?: number, manifolds?: btPersistentManifold, numManifolds?: number, islandId?: number ): void; 
processConstraints(  ): void; 
IslandCallback(  ): any; 
 

                } 

            }
        