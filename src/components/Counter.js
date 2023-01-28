import { useReducer} from "react";
import Panel from "./Panel";
import Button from "./Button";

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const UPDATE_COUNT_WITH_VALUE ='update-count-with-value'
const reducer = (state, action ) => {
    switch (action.type){
        case INCREMENT_COUNT :
            return{
                ...state,
                count: state.count + action.payload
            }
            case DECREMENT_COUNT:
            return{
                ...state,
                count: state.count + action.payload
            }
        case CHANGE_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case UPDATE_COUNT_WITH_VALUE:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
        return {...state}
    }
}
const Counter = ({initialState = 0} ) => {
    // const [count, setCount] = useState(initialState);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialState,
        valueToAdd: 0
    })
    const increment = () => {
        dispatch({type: 'increment-count', payload: 1})
        // setCount(count +1)
    }
    const decrement = () => {
        // setCount(count-1)
        dispatch({type: 'decrement-count', payload: -1})
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({type: 'change-value-to-add', payload: value })
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        dispatch({type: 'update-count-with-value'})

    }

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <lable>Add a lot !</lable>
                <input className='p-1 m-3 bg-gray-50 border border-gray-300'
                       value={state.valueToAdd || ''} onChange={handleChange} type='number'/>
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default Counter;