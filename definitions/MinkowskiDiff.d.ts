
            declare namespace Ammo { 

                export class MinkowskiDiff { 

                    constructor( a?: btConvexTemplate, b?: btConvexTemplate ); 

                    m_convexAPtr: any; 
m_convexBPtr: any; 
m_toshape1: btMatrix3x3; 
m_toshape0: btTransform; 
m_enableMargin: boolean; 
 

                    EnableMargin( enable?: boolean ): void; 
Support0( d?: btVector3 ): btVector3; 
Support1( d?: btVector3 ): btVector3; 
Support( d?: btVector3 ): btVector3; 
Support( d?: btVector3, index?: any ): btVector3; 
 

                } 

            }
        