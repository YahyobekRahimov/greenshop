import Container from "../../components/Container";
import MyAccount from "./MyAccount/MyAccount";
import Personalnfo from "./Personalnfo/Personalnfo";
import { useState } from "react";

export default function Profile() {
   const [selectedTab, setSelectedTab] = useState(0);

   let resultTab;
   if (selectedTab == 0) {
      resultTab = <Personalnfo />;
   } else if (selectedTab == 1) {
   } else if (selectedTab == 2) {
   }
   return (
      <Container>
         <div className="pt-[40px] mb-40 flex gap-7">
            <MyAccount
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />
            {resultTab}
         </div>
      </Container>
   );
}
