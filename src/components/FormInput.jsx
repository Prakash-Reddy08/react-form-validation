import './FormInput.css'
const FormInput = ({ placeholder, setUsername }) => {
    return (
        <div className="formInput">
            <label htmlFor={placeholder}>{placeholder}</label>
            <input id={placeholder} placeholder={placeholder} onChange={(e) => setUsername(e.target.value)} />
        </div>
    )
}

export default FormInput