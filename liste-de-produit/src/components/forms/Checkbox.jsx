export function Checkbox({checked, onChange, label, id}){
    return <div className="form-check-input" >
        <input
            id={id}
            type="checkbox"
            checked ={checked}
            className="form-check-input"
            onChange={(e) => onChange(e.target.checked)}
        />

        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}