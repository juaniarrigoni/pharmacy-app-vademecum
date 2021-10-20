// Import dependencies
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

// Import styled components
import {
  Content,
  Formula,
  Button,
  Tabs,
  TabContainer,
  Tab,
  TabContent,
} from "./styled";

// Import external components
import Modal from "components/general/Modal";

// Import assets
import type { ProductData, ReducerAction } from "assets/types";

const ProductModal: React.FC<{
  product: ProductData;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ product, open, setOpen }) => {
  const [isActiveDescripcion, setIsActiveDescripcion] = useState(false);
  const [isActiveModoDeUso, setIsActiveModoDeUso] = useState(false);
  const formulaElement = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const AddToCart = () => {
    const nombreCustom =
      formulaElement.current!.value !== product.formula
        ? `${product.nombre} (Fórmula personalizada)`
        : product.nombre;
    const formulaCustom = formulaElement.current!.value;
    const action: ReducerAction = {
      type: "ADD",
      payload: { ...product, nombre: nombreCustom, formula: formulaCustom },
    };
    dispatch(action);
    setOpen(false);
  };

  return (
    <Modal id="ContactModal" open={open} setOpen={setOpen}>
      <Content>
        <h2>{product.nombre}</h2>
        <Formula
          ref={formulaElement}
          defaultValue={product.formula}
          rows={4}
          onInput={() =>
            'style.height = "";style.height = scrollHeight + 3 + "px"'
          }
        />
        <Tabs>
          <TabContainer>
            <Tab
              className={isActiveDescripcion && "active"}
              id={product.descripcion.replace(/\s+/g, "-")}
            >
              <h4
                id="tab-label"
                onClick={() => setIsActiveDescripcion(!isActiveDescripcion)}
              >
                Descripcion
              </h4>
              <TabContent id="tab-content">{product.descripcion}</TabContent>
            </Tab>
          </TabContainer>
          <TabContainer>
            <Tab
              className={isActiveModoDeUso && "active"}
              id={product.modoDeUso.replace(/\s+/g, "-")}
            >
              <h4
                id="tab-label"
                onClick={() => setIsActiveModoDeUso(!isActiveModoDeUso)}
              >
                Modo de uso
              </h4>
              <TabContent id="tab-content">{product.modoDeUso}</TabContent>
            </Tab>
          </TabContainer>
        </Tabs>
        <p>
          {product.presentacion}
          <br />
          <strong>$ {product.precio}</strong>
        </p>
        <Button onClick={() => AddToCart()}>AGREGAR AL CARRITO</Button>
      </Content>
    </Modal>
  );
};

export default ProductModal;
