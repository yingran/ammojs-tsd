
            declare namespace Ammo { 

                export class btDefaultSoftBodySolver { 

                    constructor(  ); 

                    m_updateSolverConstants: boolean; 
m_softBodySet: any; 
m_numberOfPositionIterations: number; 
m_numberOfVelocityIterations: number; 
m_timeScale: number; 
 

                    getSolverType(  ): any; 
checkInitialized(  ): boolean; 
updateSoftBodies(  ): void; 
optimize( softBodies?: any, forceUpdate?: boolean ): void; 
copyBackToSoftBodies( bMove?: boolean ): void; 
solveConstraints( solverdt?: number ): void; 
predictMotion( solverdt?: number ): void; 
copySoftBodyToVertexBuffer( softBody?: any, vertexBuffer?: btVertexBufferDescriptor ): void; 
processCollision( arg1?: btSoftBody, arg2?: btCollisionObjectWrapper ): void; 
processCollision( arg1?: btSoftBody, arg2?: btSoftBody ): void; 
btSoftBodySolver(  ): any; 
btSoftBodySolver(  ): any; 
processCollision( arg1?: btSoftBody, arg2?: btCollisionObjectWrapper ): void; 
setNumberOfPositionIterations( iterations?: number ): void; 
getNumberOfPositionIterations(  ): number; 
setNumberOfVelocityIterations( iterations?: number ): void; 
getNumberOfVelocityIterations(  ): number; 
getTimeScale(  ): number; 
 

                } 

            }
        