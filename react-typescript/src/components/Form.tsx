const Form = () => {
    const handlesubmit = () => { }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" name="nick" placeholder="nick" />
                <input type="text" name="subMonths" placeholder="subMonths" />
                <input type="text" name="description" placeholder="description" />
                <input type="text" name="avatar" placeholder="avatar" />
            </form>

            <button>Save a new sub</button>
        </div>
    )


}



export default Form; 