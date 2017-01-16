
            declare namespace Ammo { 

                export class btClock { 

                    constructor( other?: btClock ); 

                    m_data: btClockData; 
 

                    reset(  ): void; 
getTimeMilliseconds(  ): number; 
getTimeMicroseconds(  ): number; 
getTimeSeconds(  ): any; 
 

                } 

            }
        