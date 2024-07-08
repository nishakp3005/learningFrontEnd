import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nishakp3005')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-pink-300 text-white p-4 text-3xl flex flex-col justify-center items-center '>
      <div className='text-black'>GitHub followers : {data?.followers}</div>
      <img src={data?.avatar_url} alt="github proflie pic" width = {300}  className='justify-self-center'/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/nishakp3005")
    return response.json()
}