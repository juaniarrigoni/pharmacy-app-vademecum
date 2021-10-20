// Import styled components
import { OpenCartButton } from "./styled";

// Import external components
import Icon from "components/general/Icons/Cart";

// Import assets
import type { State } from "assets/types";

const CartButton: React.FC<{
  cart: State;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ cart, setOpen }) => {
  return cart.length === 0 ? null : (
    <OpenCartButton id="CartButtonContainer" onClick={() => setOpen(true)}>
      <Icon />
    </OpenCartButton>
  );
};

export default CartButton;
