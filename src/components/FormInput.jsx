import './FormInput.css'
const FormInput = ({ label, handleChange, id, ...inputProps }) => {
    return (
        <div className="formInput">
            <label htmlFor={inputProps.placeholder}>{label}</label>
            <input id={inputProps.placeholder} {...inputProps} onChange={handleChange} />
        </div>
    )
}

export default FormInput