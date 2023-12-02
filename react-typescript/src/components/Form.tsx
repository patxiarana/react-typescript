import { useReducer, useState } from "react";
import { Sub } from "../types";
interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (newSub: Sub) => void

}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: '',
}

type FormReducerAction = {
    type:"change_value",
    payload: {
       inputName: string,
       inputValue: string
    }
} | {
    type: "clear"
}


const formReducer = (state : FormState['inputValues'],action:FormReducerAction ) => {
    switch(action.type) {
        case "change_value":
            const {inputName , inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
            case "clear" : 
            return INITIAL_STATE 

            default:
                return state 
    }
}

const Form = ({ onNewSub }: FormProps) => {


   // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues,dispatch] = useReducer(formReducer, INITIAL_STATE )


    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       const {name, value} = e.target
        dispatch({
            type: "change_value",
            payload: {
                inputName : name,
                inputValue: value
            }
        })
        
    }

    const handleClear = () => {
        dispatch({type : "clear"})
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input onChange={handlechange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handlechange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
                <textarea onChange={handlechange} value={inputValues.description} name="description" placeholder="description" />
                <input onChange={handlechange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <button onClick={handleClear} type="button">Clear The Form</button>
                <button type="submit">Save a new sub</button>
            </form>
        </div>
    )


}



export default Form; 