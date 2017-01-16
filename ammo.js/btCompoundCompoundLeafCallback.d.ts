
            declare namespace Ammo { 

                export class btCompoundCompoundLeafCallback { 

                    constructor( compound1ObjWrap?: btCollisionObjectWrapper, compound0ObjWrap?: btCollisionObjectWrapper, dispatcher?: btDispatcher, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult, childAlgorithmsCache?: btHashedSimplePairCache, sharedManifold?: btPersistentManifold ); 

                    m_numOverlapPairs: number; 
m_compound0ColObjWrap: btCollisionObjectWrapper; 
m_compound1ColObjWrap: btCollisionObjectWrapper; 
m_dispatcher: btDispatcher; 
m_dispatchInfo: btDispatcherInfo; 
m_resultOut: btManifoldResult; 
m_childCollisionAlgorithmCache: btHashedSimplePairCache; 
m_sharedManifold: btPersistentManifold; 
 

                    Process( leaf0?: btDbvtNode, leaf1?: btDbvtNode ): void; 
Process( arg1?: btDbvtNode, arg2?: btDbvtNode ): any; 
Process( arg1?: btDbvtNode ): any; 
Process( n?: btDbvtNode, btScalar?: any ): any; 
Descent( arg1?: btDbvtNode ): any; 
AllLeaves( arg1?: btDbvtNode ): any; 
 

                } 

            }
        