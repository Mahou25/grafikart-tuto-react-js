/**
 * 
 * @param {String} placeholder
 * @param {String} value
 * @param {(s:string) => void} onChange
 */
// export function Input({placeholder, value, onChange, label, inputRef, wrapperRef, labelRef}) {
//     console.log('input',inputRef)
//     const id = useId()
//     return <div ref={wrapperRef}>
//         <label ref={labelRef}  className="form-label" htmlFor={id} > {label} </label>
//         <input
//             ref={inputRef}
//             id={id}
//             type="text"
//             className="form-control"
//             value={value}
//             placeholder={placeholder}
//             onChange={(e) => onChange?.(e.target.value)}
//         />
//     </div>
// }


export const Input = forwardRef(function Input ({placeholder, value, onChange, label}, ref) {
  console.log(ref)
  const id = useId()
  return <div>
    <label className="form-label" htmlFor={id}>{label}</label>
    <input
      ref={ref}
      id={id}
      className="form-control"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
    />
  </div>
})
