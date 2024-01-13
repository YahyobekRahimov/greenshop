import Logo from "/src/images/logo.svg?react";
import Location from "/src/images/Location.png";
import Message from "/src/images/Message.png";
import Calling from "/src/images/Calling.png";

export default function NewsletterSection() {
   return (
      <div className="pl-7 pr-[14rem] grid grid-cols-4 py-6 items-center bg-footerBackgroundSecondary">
         <Logo />
         <div className="flex gap-2 items-center">
            <div>
               <img className="w-8" src={Location} alt="location" />
            </div>
            70 West Buckingham Ave. Farmingdale, NY 11735
         </div>
         <div className="flex gap-4">
            <div>
               <img className="w-5" src={Message} alt="Message" />
            </div>
            contact@greenshop.com
         </div>
         <div className="flex gap-4">
            <div>
               <img className="w-5" src={Calling} alt="Call" />
            </div>
            +88 01911 717 490
         </div>
      </div>
   );
}
