import { React } from 'react'
import Container from '../components/Container';
import { NavLink } from 'react-router-dom';

export default function Shop() {
   return (
      <Container>
         <div>
          <div className="flex gap-2 ">
            <ul>
               <li>
                  <NavLink>All Plents</NavLink>
               </li>
            </ul>
            <h1>All plents</h1>
            <h1>New Arrivals</h1>
            <h1>Sale</h1>
          </div>
         </div>
      </Container>)
}
