
            declare namespace Ammo { 

                export class CProfileIterator { 

                    constructor( start?: any ); 

                    CurrentParent: any; 
CurrentChild: any; 
 

                    First( arg1?: any ): void; 
Next( arg1?: any ): void; 
Is_Done( arg1?: any ): boolean; 
Is_Root( arg1?: any ): boolean; 
Enter_Child( index?: number ): void; 
Enter_Largest_Child( arg1?: any ): void; 
Enter_Parent( arg1?: any ): void; 
Get_Current_Name( arg1?: any ): any; 
Get_Current_Total_Calls( arg1?: any ): number; 
Get_Current_Total_Time( arg1?: any ): number; 
Get_Current_UserPointer( arg1?: any ): any; 
Set_Current_UserPointer( ptr?: void ): void; 
Get_Current_Parent_Name( arg1?: any ): any; 
Get_Current_Parent_Total_Calls( arg1?: any ): number; 
Get_Current_Parent_Total_Time( arg1?: any ): number; 
 

                } 

            }
        