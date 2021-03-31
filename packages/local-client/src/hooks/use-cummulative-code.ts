import { useTypedSelector } from './use-typed-selector';

const useCumulativeCode = (cellId: string) => {
    return useTypedSelector((state) => {
        const orderedCells = state!.cells!.order.map(
            (ID) => state!.cells!.data[ID]
        );
        const showFunc = `
        import _React from 'react';
        import _ReactDOM from 'react-dom';

        var show = (value)=>{
            const root =  document.querySelector("#root");
             
            if(typeof value === 'object'){
                if(value.$$typeof && value.props){
                    _ReactDOM.render(value,root);
                } 
                else{
                    root.innerHTML = JSON.stringify(value);
                }
            }
            
            else{
                root.innerHTML = value;
            }
            
        }
    `;
        const showFuncNoOp = 'var show =()=>{}';
        const cumulative_code: string[] = [];
        for (let c of orderedCells) {
            if (c.type === 'code') {
                if (c.id === cellId) {
                    cumulative_code.push(showFunc);
                } else {
                    cumulative_code.push(showFuncNoOp);
                }
                cumulative_code.push(c.content);
            }
            if (c.id === cellId) break;
        }
        return cumulative_code.join('\n');
    });
};
export default useCumulativeCode;
