import {useEffect} from "react";

const Hello = () => {
  useEffect(() => {
    fetch('/api/hello')
  }, [])


  return (
    <>hello</>
  )
}

export default Hello

