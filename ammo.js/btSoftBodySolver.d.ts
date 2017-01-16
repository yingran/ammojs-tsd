
            declare namespace Ammo { 

                export class btSoftBodySolver { 

                    constructor(  ); 

                    m_numberOfPositionIterations: number; 
m_numberOfVelocityIterations: number; 
m_timeScale: number; 
 

                    getSolverType(  ): any; 
checkInitialized(  ): boolean; 
optimize( softBodies?: any, forceUpdate?: boolean ): void; 
copyBackToSoftBodies( bMove?: boolean ): void; 
predictMotion( solverdt?: number ): void; 
solveConstraints( solverdt?: number ): void; 
updateSoftBodies(  ): void; 
processCollision( arg1?: btSoftBody, arg2?: btCollisionObjectWrapper ): void; 
processCollision( arg1?: btSoftBody, arg2?: btSoftBody ): void; 
setNumberOfPositionIterations( iterations?: number ): void; 
getNumberOfPositionIterations(  ): number; 
setNumberOfVelocityIterations( iterations?: number ): void; 
getNumberOfVelocityIterations(  ): number; 
getTimeScale(  ): number; 
 

                } 

            }
        