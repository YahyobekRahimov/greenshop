import Container from "../../components/Container";
import MyAccount from "./MyAccount/MyAccount";
import Personalnfo from "./Personalnfo/Personalnfo";

export default function Profile() {
  return (
    <Container>
      <div className="pt-[40px] mb-40 flex gap-7">
        <MyAccount />
        <Personalnfo />
      </div>
    </Container>
  );
}
