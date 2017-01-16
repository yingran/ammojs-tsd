
            declare namespace Ammo { 

                export class btMatrixX { 

                    constructor( rows?: number, cols?: number ); 

                    m_rows: number; 
m_cols: number; 
m_operations: number; 
m_resizeOperations: number; 
m_setElemOperations: number; 
m_storage: any; 
m_rowNonZeroElements1: any; 
 

                    getBufferPointerWritable(  ): any; 
getBufferPointer(  ): any; 
resize( rows?: number, cols?: number ): void; 
cols(  ): number; 
rows(  ): number; 
addElem( row?: number, col?: number, val?: any ): void; 
setElem( row?: number, col?: number, val?: any ): void; 
mulElem( row?: number, col?: number, val?: any ): void; 
copyLowerToUpperTriangle(  ): void; 
setZero(  ): void; 
setIdentity(  ): void; 
printMatrix( msg?: string ): void; 
rowComputeNonZeroElements(  ): void; 
transpose(  ): btMatrixX; 
multiplyAdd2_p8r( B?: any, C?: any, numRows?: number, numRowsOther?: number, row?: number, col?: number ): void; 
multiply2_p8r( B?: any, C?: any, numRows?: number, numRowsOther?: number, row?: number, col?: number ): void; 
setSubMatrix( rowstart?: number, colstart?: number, rowend?: number, colend?: number, value?: any ): void; 
setSubMatrix( rowstart?: number, colstart?: number, rowend?: number, colend?: number, block?: btMatrixX ): void; 
setSubMatrix( rowstart?: number, colstart?: number, rowend?: number, colend?: number, block?: any ): void; 
negative(  ): btMatrixX; 
 

                } 

            }
        