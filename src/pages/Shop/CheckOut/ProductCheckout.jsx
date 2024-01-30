import Container from "../../../components/Container";
import CartTotal from "../CartSummary/CartTotal";
import FormInputs from "./FormInputs";
import OrderedProducts from "./OrederedProducts";

export default function ProductCheckout() {
  return (
    <Container>
      <div className="flex mb-52 gap-16">
        <FormInputs />
        <OrderedProducts />
      </div>

    </Container>
  );
}
