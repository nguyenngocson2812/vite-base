import React, { createContext, useState } from 'react';
import Counter from './components/Counter';

export const AppContext = createContext();

function App() {
    const [count, setCount] = useState(0);
    const handler = (type) => {
        if(type === "increment"){
            setCount(count + 1)
        }
        else{
            setCount(count - 1)
        }
    }
    return (
        <AppContext.Provider value={{
            data: {
                count
            },
            handler
        }} >
            <Counter />
        </AppContext.Provider>
    );
}

export default App;
