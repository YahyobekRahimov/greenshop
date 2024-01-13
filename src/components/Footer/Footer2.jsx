import Container from "../Container";
import { Divider } from "@mui/material";

import FooterCards from "./FooterCards";

export default function Footer() {
   return (
      <Container classes="flex bg-softBackground flex-col sm:hidden">
         <FooterCards />
         <Divider variant="fullWidth" />
         <NewsletterSection />
         <Divider variant="fullWidth" />
         <ContactInfo />
         <FooterLinks />
         <BottomSection />
      </Container>
   );
}
