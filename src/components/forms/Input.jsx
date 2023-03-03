const Input = (props) => {
 const {id, label, name, type, handle} = props

    return (
        <div className="customIn">
            <label htmlFor={name}>{label}</label>
            <input type={type || 'text'} id={id} name={name} onChange={(e)=>handle(e)}/>
        </div>
    )
}

export default Input