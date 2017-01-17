
            declare namespace Ammo { 

                export class btGEN_List { 

                    constructor(  ); 

                    m_head: btGEN_Link; 
m_tail: btGEN_Link; 
 

                    getHead(  ): btGEN_Link; 
getTail(  ): btGEN_Link; 
addHead( link?: btGEN_Link ): void; 
addTail( link?: btGEN_Link ): void; 
 

                } 

            }
        