import  { useState, useMemo, useEffect } from 'react'

const useElementOnScreen = (options, target) =>{
    const [isVisible, setisVisible] = useState(false)
    const callback = entries =>{
      const [entry] = entries;
      setisVisible(entry.isIntersecting)
    }
    const optionsMemo = useMemo(()=>{
      return options
    }, [options])
    useEffect(()=>{
      const observer = new IntersectionObserver(callback, optionsMemo)
      const currentTarget = target.current;
      if(currentTarget) observer.observe(target.current)
      return () =>{
        if(currentTarget)observer.unobserve(currentTarget)
      }
    }, [target, optionsMemo])
    return isVisible
}
export default useElementOnScreen


