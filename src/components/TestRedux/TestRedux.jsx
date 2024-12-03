import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../../stores/slices/counterSlice"

const { incrementByAmount, decrementByAmount } = counterSlice.actions;
function TestRedux() {
    // useSelector , useDispatch
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    // dispatch(action)
    const handleDecrement = () => {
        dispatch(decrementByAmount(10));
    }
    const handleIncrement = () => {
        dispatch(incrementByAmount(20));
    }


    return (<>
        <button onClick={handleIncrement}>+</button>
        <button>{counter}</button>
        <button onClick={handleDecrement}>+</button>
    </>)
}

export default TestRedux