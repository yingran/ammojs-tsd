
            declare namespace Ammo { 

                export class CProfileNode { 

                    constructor( name?: string, parent?: any ); 

                    Name: any; 
TotalCalls: number; 
TotalTime: number; 
StartTime: number; 
RecursionCounter: number; 
Parent: any; 
Child: any; 
Sibling: any; 
m_userPtr: any; 
 

                    Get_Sub_Node( name?: string ): any; 
Get_Parent( arg1?: any ): any; 
Get_Sibling( arg1?: any ): any; 
Get_Child( arg1?: any ): any; 
CleanupMemory(  ): void; 
Reset( arg1?: any ): void; 
Call( arg1?: any ): void; 
Return( arg1?: any ): boolean; 
Get_Name( arg1?: any ): any; 
Get_Total_Calls( arg1?: any ): number; 
Get_Total_Time( arg1?: any ): number; 
GetUserPointer(  ): any; 
SetUserPointer( ptr?: void ): void; 
 

                } 

            }
        