import {useEffect} from "react";

const Hey = () => {
  useEffect(() => {
    fetch('/api/hey')
  }, [])

  return (
    <>hey</>
  )
}

export default Hey
