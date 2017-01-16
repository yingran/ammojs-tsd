
            declare namespace Ammo { 

                export class btCompoundLeafCallback { 

                    constructor( compoundObjWrap?: btCollisionObjectWrapper, otherObjWrap?: btCollisionObjectWrapper, dispatcher?: btDispatcher, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult, childCollisionAlgorithms?: btCollisionAlgorithm, sharedManifold?: btPersistentManifold ); 

                    m_compoundColObjWrap: btCollisionObjectWrapper; 
m_otherObjWrap: btCollisionObjectWrapper; 
m_dispatcher: btDispatcher; 
m_dispatchInfo: btDispatcherInfo; 
m_resultOut: btManifoldResult; 
m_childCollisionAlgorithms: btCollisionAlgorithm; 
m_sharedManifold: btPersistentManifold; 
 

                    ProcessChildShape( childShape?: btCollisionShape, index?: number ): void; 
Process( leaf?: btDbvtNode ): void; 
Process( arg1?: btDbvtNode, arg2?: btDbvtNode ): any; 
Process( arg1?: btDbvtNode ): any; 
Process( n?: btDbvtNode, btScalar?: any ): any; 
Descent( arg1?: btDbvtNode ): any; 
AllLeaves( arg1?: btDbvtNode ): any; 
 

                } 

            }
        