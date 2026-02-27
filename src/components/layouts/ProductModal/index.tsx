// Import dependencies
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


// Import styled components
import {
  Content,
  Formula,
  FormulaWrapper,
  CopyButton,
  Button,
  Tabs,
  TabContainer,
  Tab,
  TabContent,
} from "./styled";

// Import external components
import Modal from "components/general/Modal";

// Import assets
import { formulaPersonalizadaId } from "assets/constants/contact";
import type { ProductData, ReducerAction } from "assets/types";

const ProductModal: React.FC<{
  product: ProductData;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  edit?: boolean;
  sectionId?: string;
}> = ({ product, open, setOpen, edit, sectionId }) => {
  const [isActiveDescripcion, setIsActiveDescripcion] = useState(false);
  const [isActiveModoDeUso, setIsActiveModoDeUso] = useState(false);
  const [formula, setFormula] = useState(product.formula);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => setFormula(product.formula), [product]);

  const AddToCart = () => {
    const nombreCustom =
      !product.nombre.includes(formulaPersonalizadaId) &&
        formula !== product.formula
        ? `${product.nombre}${formulaPersonalizadaId}`
        : product.nombre;
    const action: ReducerAction = {
      type: "ADD",
      payload: { ...product, formula, nombre: nombreCustom },
    };
    dispatch(action);
    setOpen(false);
  };

  const copyFormula = () => {
    navigator.clipboard.writeText(formula || "").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Modal id="ContactModal" open={open} setOpen={setOpen}>
      <Content>
        <div className="copy">
          <h2>{product.nombre}</h2>
          <p>
            {product.presentacion}
            <br />
            <strong>$ {product.precio}</strong>
          </p>
        </div>
        <FormulaWrapper>
          <Formula
            defaultValue={product.formula}
            onChange={(event) => setFormula(event.target.value)}
            rows={4}
            onInput={() =>
              'style.height = "";style.height = scrollHeight + 3 + "px"'
            }
          />
          <CopyButton onClick={copyFormula} title="Copiar fórmula">
            {copied ? "✓" : "⎘"}
          </CopyButton>
        </FormulaWrapper>
        <Tabs>
          <TabContainer>
            <Tab
              className={isActiveDescripcion && "active"}
              id={product.descripcion.replace(/\s+/g, "-")}
            >
              <p
                id="tab-label"
                onClick={() => setIsActiveDescripcion(!isActiveDescripcion)}
              >
                Descripcion
              </p>
              <TabContent id="tab-content">{product.descripcion}</TabContent>
            </Tab>
          </TabContainer>
          <TabContainer>
            <Tab
              className={isActiveModoDeUso && "active"}
              id={product.modoDeUso.replace(/\s+/g, "-")}
            >
              <p
                id="tab-label"
                onClick={() => setIsActiveModoDeUso(!isActiveModoDeUso)}
              >
                Modo de uso
              </p>
              <TabContent id="tab-content">{product.modoDeUso}</TabContent>
            </Tab>
          </TabContainer>
        </Tabs>
        {edit ? (
          <Button
            onClick={() => {
              if (formula !== product.formula) {
                dispatch({ type: "REMOVE", payload: product });
                AddToCart();
              }
            }}
            disabled={!(formula !== product.formula)}
          >
            GUARDAR CAMBIOS
          </Button>
        ) : (
          <>
            <Button onClick={() => AddToCart()}>AGREGAR AL CARRITO</Button>
            {sectionId && product.id && (
              <Button
                onClick={() => {
                  window.open(`/${sectionId}/${product.id}`, "_blank");
                }}
                style={{ marginTop: "10px" }}
              >
                VER MÁS
              </Button>
            )}
          </>
        )}
      </Content>
    </Modal>
  );
};

export default ProductModal;
