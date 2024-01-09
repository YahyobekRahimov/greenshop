import React, { useEffect } from 'react'
import someImage from "../images/cactus.png"

export default function ModalCard({ data }) {
  console.log(someImage)
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div>
      {data && data.map((e) => {
        return (
          <div className="flex gap-2 mb-2">
            <div>
              <img className="w-[10.325rem]" src={e.image} alt="" />
            </div>
            <div className=" flex flex-col gap-2 text-2xl mb-2 ">
              <h1 >{e.name}</h1>
              <h2 className="text-green-700">{e.price} $</h2>
              <h2 className="text-gray-700">About: {e.description}</h2>
              <h2> Categories: {e.categories}</h2>
            </div>
          </div>


        )
      })}
    </div>
  )
}
