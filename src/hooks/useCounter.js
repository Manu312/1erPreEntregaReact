import {useState} from 'react';

const useCounter = (initialValue=0,step=1) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count + step);
    const decrement = () => {
        if(count > 0){
            setCount(count - step)
        }};
    return {count, increment, decrement};
};

export default useCounter;