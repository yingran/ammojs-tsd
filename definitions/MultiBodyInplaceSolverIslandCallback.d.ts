
            declare namespace Ammo { 

                export class MultiBodyInplaceSolverIslandCallback { 

                    constructor( solver?: btMultiBodyConstraintSolver, dispatcher?: btDispatcher ); 

                    m_solverInfo: btContactSolverInfo; 
m_solver: btMultiBodyConstraintSolver; 
m_multiBodySortedConstraints: btMultiBodyConstraint; 
m_numMultiBodyConstraints: number; 
m_sortedConstraints: btTypedConstraint; 
m_numConstraints: number; 
m_debugDrawer: btIDebugDraw; 
m_dispatcher: btDispatcher; 
m_bodies: any; 
m_manifolds: any; 
m_constraints: any; 
m_multiBodyConstraints: any; 
 

                    setup( solverInfo?: btContactSolverInfo, sortedConstraints?: btTypedConstraint, numConstraints?: number, sortedMultiBodyConstraints?: btMultiBodyConstraint, numMultiBodyConstraints?: number, debugDrawer?: btIDebugDraw ): void; 
processIsland( bodies?: btCollisionObject, numBodies?: number, manifolds?: btPersistentManifold, numManifolds?: number, islandId?: number ): void; 
processConstraints(  ): void; 
IslandCallback(  ): any; 
 

                } 

            }
        