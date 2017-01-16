
            declare namespace Ammo { 

                export class btDbvt { 

                    constructor( arg1?: btDbvt ); 

                    m_root: btDbvtNode; 
m_free: btDbvtNode; 
m_lkhd: number; 
m_leaves: number; 
m_opath: any; 
m_stkStack: any; 
m_rayTestStack: any; 
 

                    clear(  ): void; 
empty(  ): boolean; 
optimizeBottomUp(  ): void; 
optimizeTopDown( bu_treshold?: number ): void; 
optimizeIncremental( passes?: number ): void; 
insert( box?: btDbvtVolume, data?: void ): btDbvtNode; 
update( leaf?: btDbvtNode, lookahead?: number ): void; 
update( leaf?: btDbvtNode, volume?: btDbvtVolume ): void; 
update( leaf?: btDbvtNode, volume?: btDbvtVolume, velocity?: btVector3, margin?: any ): boolean; 
update( leaf?: btDbvtNode, volume?: btDbvtVolume, velocity?: btVector3 ): boolean; 
update( leaf?: btDbvtNode, volume?: btDbvtVolume, margin?: any ): boolean; 
remove( leaf?: btDbvtNode ): void; 
write( iwriter?: any ): void; 
clone( dest?: btDbvt, iclone?: any ): void; 
collideTT( root0?: btDbvtNode, root1?: btDbvtNode, DBVT_IPOLICY?: any ): any; 
collideTTpersistentStack( root0?: btDbvtNode, root1?: btDbvtNode, DBVT_IPOLICY?: any ): any; 
collideTV( root?: btDbvtNode, volume?: btDbvtVolume, DBVT_IPOLICY?: any ): any; 
rayTestInternal( root?: btDbvtNode, rayFrom?: btVector3, rayTo?: btVector3, rayDirectionInverse?: btVector3, signs?: number, lambda_max?: any, aabbMin?: btVector3, aabbMax?: btVector3, DBVT_IPOLICY?: any ): any; 
 

                } 

            }
        