import React,{useState,useEffect} from 'react'
const key ='AIzaSyDX2DwkmgNDhcw1XQGr2xMBz1rapO16g9o'
const id  = '0fcf9814707fa6502'
const useGoogleSearch=(term)=>{
      const [data,setData] = useState(null)
      useEffect(()=>{
        const fetchData = async ()=>{
              fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${term}`)
              .then(res=>res.json())
              .then(data=>{
                    setData(data)
              })
        } 
        fetchData()
      },[term])

      return (
            {data}
      )
}

export default useGoogleSearch
