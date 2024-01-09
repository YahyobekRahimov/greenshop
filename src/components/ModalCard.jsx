import React, { useEffect } from 'react'
import someImage from "../images/cactus.png"

export default function ModalCard({data}) {
  console.log(someImage)
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div>
       {data && data.map((e)=>{
        return(
         <div>
           <img className="w-[10.325rem]" src={e.image} alt="" />,
           <h1>{e.name}</h1>
           <h2>{e.price} $</h2>
         </div>


        )
       })}
    </div>
  )
}
