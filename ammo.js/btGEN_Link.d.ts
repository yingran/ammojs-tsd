
            declare namespace Ammo { 

                export class btGEN_Link { 

                    constructor( next?: btGEN_Link, prev?: btGEN_Link ); 

                    m_next: btGEN_Link; 
m_prev: btGEN_Link; 
 

                    getNext(  ): btGEN_Link; 
getPrev(  ): btGEN_Link; 
isHead(  ): boolean; 
isTail(  ): boolean; 
insertBefore( link?: btGEN_Link ): void; 
insertAfter( link?: btGEN_Link ): void; 
remove(  ): void; 
 

                } 

            }
        