import React from 'react'
import Container from "../../components/Container";
import Button from '../../components/Button';
import IconRight from '../../images/iconrigth.svg?react'

export default function FindMore(props) {
  const {image,textTitel,textSubtitel}= props;
  return (
    <Container>
        
      <div className="flex mt-4">
      <img src={image} alt="" />
        <div className="flex flex-col gap-5">
          <h1 className="text-right">{textTitel}</h1>
            <p className="text-right">{textSubtitel}</p>
               <Button image={<IconRight/>} classes="flex gap-2 items-center bg-primary rounded-lg hover:bg-primaryDark text-white py-[0.625rem] pr-[3rem] pl-[1.75rem]">Find More </Button>
        </div>
      
      </div>
    </Container>

  )
}
