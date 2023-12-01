import { useState } from "react";

const Form = () => {


    const [inputValues, setInputValues] = useState({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: '',
    })
    const handlesubmit = () => { }

    const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
         } )
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input onChange={handlechange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handlechange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
                <textarea onChange={handlechange} value={inputValues.description}  name="description" placeholder="description" />
                <input onChange={handlechange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
            </form>

            <button>Save a new sub</button>
        </div>
    )


}



export default Form; 