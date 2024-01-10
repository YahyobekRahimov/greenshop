import React, { useEffect } from 'react'

export default function ModalCard({ data }) {
 
  return (
    <div>
      {data && data.map((e) => {
        return (
          <div className=" hover:bg-green-50 flex gap-2 mb-2">
            <div>
              <img className="cursor-pointer w-[10.325rem]" src={e.image} alt="" />
            </div>
            <div className=" flex flex-col gap-2 text-2xl mb-2 ">
              <h1 className="cursor-pointer" >{e.name}</h1>
              <h2 className="cursor-pointer text-green-700">{e.price} $</h2>
              <h2 className="cursor-pointer text-gray-700">About: {e.description}</h2>
              <h2 className="cursor-pointer"> Categories: {e.categories}</h2>
            </div>
          </div>


        )
      })}
    </div>
  )
}
