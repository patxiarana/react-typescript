import { useState } from "react";
import { Sub } from "../types";
interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>

}

const Form = ({ onNewSub }: FormProps) => {


    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: '',
    })

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(subs => ([...subs, inputValues]))
    }

    const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
        //   console.log(setInputValues)
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input onChange={handlechange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handlechange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
                <textarea onChange={handlechange} value={inputValues.description} name="description" placeholder="description" />
                <input onChange={handlechange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <button type="submit">Save a new sub</button>
            </form>
        </div>
    )


}



export default Form; 