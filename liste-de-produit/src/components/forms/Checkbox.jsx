export function Checkbox({checked, onChange, label}){
    return <div className="form-check-input" >
        <input
            type="checkbox"
            checked ={checked}
            className="form-check-input"
            onChange={(e) => onChange(e.target.checked)}
        />

        <label className="form-check-label">{label}</label>
    </div>
}