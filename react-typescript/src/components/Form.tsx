import { useState } from "react";
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



const Form = ({ onNewSub }: FormProps) => {


    const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    const handleClear = () => {
      setInputValues(INITIAL_STATE)
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