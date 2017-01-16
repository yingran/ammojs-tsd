
            declare namespace Ammo { 

                export class btMultibodyLink { 

                    constructor(  ); 

                    m_mass: any; 
m_inertiaLocal: btVector3; 
m_parent: number; 
m_zeroRotParentToThis: btQuaternion; 
m_dVector: btVector3; 
m_eVector: btVector3; 
m_absFrameTotVelocity: btSpatialMotionVector; 
m_absFrameLocVelocity: btSpatialMotionVector; 
m_axes: btSpatialMotionVector; 
m_dofOffset: number; 
m_cfgOffset: number; 
m_cachedRotParentToThis: btQuaternion; 
m_cachedRVector: btVector3; 
m_appliedForce: btVector3; 
m_appliedTorque: btVector3; 
m_appliedConstraintForce: btVector3; 
m_appliedConstraintTorque: btVector3; 
m_jointPos: any; 
m_jointTorque: any; 
m_collider: btMultiBodyLinkCollider; 
m_flags: number; 
m_dofCount: number; 
m_posVarCount: number; 
m_jointType: any; 
m_jointFeedback: btMultiBodyJointFeedback; 
m_cachedWorldTransform: btTransform; 
m_linkName: any; 
m_jointName: any; 
 

                    BT_DECLARE_ALIGNED_ALLOCATOR(  ): any; 
setAxisTop( dof?: number, axis?: btVector3 ): void; 
setAxisBottom( dof?: number, axis?: btVector3 ): void; 
setAxisTop( dof?: number, x?: any, y?: any, z?: any ): void; 
setAxisBottom( dof?: number, x?: any, y?: any, z?: any ): void; 
getAxisTop( dof?: number ): btVector3; 
getAxisBottom( dof?: number ): btVector3; 
updateCache(  ): void; 
updateCacheMultiDof( pq?: any ): void; 
 

                } 

            }
        