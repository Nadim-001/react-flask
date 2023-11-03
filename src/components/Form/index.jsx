function Form({handleSubmit, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="description" id="description" placeholder="Enter a character"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;