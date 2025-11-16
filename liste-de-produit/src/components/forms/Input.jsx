/**
 * 
 * @param {String} placeholder
 * @param {String} value
 * @param {(s:string) => void} onChange
 */
export function Input({placeholder, value, onChange}) {
    return <div>
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            className="form-control"
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}