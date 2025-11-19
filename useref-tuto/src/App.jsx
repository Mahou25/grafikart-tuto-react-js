import './App.css';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Input } from '../../usememo-tuto/src/components/Input';

function App() {
  const [count, setCount] = useState(0)
  const prefixRef = useRef(null)
  //useRef(null) = useMemo(()=>{(current: null)}, [])
  const [prefix, setPrefix]=useState('')
  prefixRef.current = prefix

  
  console.log(ref)
  
  // useEffect(()=>{
  //     console.log(ref.current.offsetHeight)
  //   }, []);


    useEffect(()=>{
      const timer = setInterval(()=>{
        console.log(prefixRef.current)
      }, 1000)
      return()=>{
        clearInterval(timer)
      }
    }, []);

  return (


    // <div onClick={() => ref.current='hello' }>
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
    //   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
    //   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    //   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    //   eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    //   in culpa qui officia deserunt mollit anim id est laborum.
    // </div>

    


    <div ref={ref}>
      <Input label="prefix" value={prefix} onChange={setPrefix} />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
      in culpa qui officia deserunt mollit anim id est laborum.
    </div>


  )
}

function AppSecond() {
  const ref = useRef()
  // const [prefix, setPrefix]=useState('')
  // prefixRef.current = prefix
  
  // useEffect(()=>{
  //     const timer = setInterval(()=>{
  //       console.log(prefixRef.current)
  //     }, 1000)
  //     return()=>{
  //       clearInterval(timer)
  //     }
  //   }, []);

  return <div>
    <Input label="prefix" value={prefix} onChange={setPrefix} />
  </div>

}

export default App
