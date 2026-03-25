// Import dependencies
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Import styled components
import {
  Content,
  TwoColumnLayout,
  LeftColumn,
  RightColumn,
  Formula,
  FormulaWrapper,
  CopyButton,
  Button,
  Tabs,
  TabContainer,
  Tab,
  TabContent,
} from "./styled";

// Import inner components
import Modal from "components/general/Modal";
import FormulaEditor from "components/layouts/FormulaEditor";

// Import assets
import { formulaPersonalizadaId } from "assets/constants/contact";
import { useAuth } from "contexts/AuthContext";
import type { ProductData, ReducerAction } from "assets/types";

const ProductModal: React.FC<{
  product: ProductData;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  edit?: boolean;
  sectionId?: string;
}> = ({ product, open, setOpen, edit }) => {
  const [isActiveDescripcion, setIsActiveDescripcion] = useState(false);
  const [isActiveModoDeUso, setIsActiveModoDeUso] = useState(false);
  const [formula, setFormula] = useState(product.formula);
  const [copied, setCopied] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, openAuthModal } = useAuth();

  useEffect(() => {
    setFormula(product.formula);
    setEditorOpen(false);
  }, [product]);

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

  const handleOpenEditor = () => {
    setOpen(false);
    setTimeout(() => {
      setEditorOpen(true);
    }, 300);
  };

  return (
    <>
      <Modal id="ProductModal" open={open} setOpen={setOpen}>
        <Content>
          {/* Header: product name + price */}
          <div className="copy">
            <h2>{product.nombre}</h2>
            <p>
              {product.presentacion}
              <br />
              <strong>$ {product.precio}</strong>
            </p>
          </div>

          {/* Two-column body */}
          <TwoColumnLayout>
            {/* LEFT: Formula */}
            <LeftColumn>
              <FormulaWrapper>
                <Formula
                  value={formula ?? ""}
                  onChange={(event) => setFormula(event.target.value)}
                  rows={8}
                />
                <CopyButton onClick={copyFormula} title="Copiar fórmula">
                  {copied ? "✓ Copiada" : "⎘ Copiar fórmula"}
                </CopyButton>
              </FormulaWrapper>
            </LeftColumn>

            {/* RIGHT: Tabs + future actions */}
            <RightColumn>
              <Tabs>
                {/* Descripción tab */}
                <TabContainer>
                  <Tab className={isActiveDescripcion ? "active" : ""}>
                    <p
                      className="tab-label"
                      onClick={() => setIsActiveDescripcion(!isActiveDescripcion)}
                    >
                      Descripción
                    </p>
                    <TabContent className="tab-content">
                      {product.descripcion && product.descripcion !== "-"
                        ? product.descripcion
                        : "Información no disponible. Consultá con tu farmacéutico."}
                    </TabContent>
                  </Tab>
                </TabContainer>

                {/* Modo de uso tab */}
                <TabContainer>
                  <Tab className={isActiveModoDeUso ? "active" : ""}>
                    <p
                      className="tab-label"
                      onClick={() => setIsActiveModoDeUso(!isActiveModoDeUso)}
                    >
                      Modo de uso
                    </p>
                    <TabContent className="tab-content">
                      {product.modoDeUso && product.modoDeUso !== "-"
                        ? product.modoDeUso
                        : "Información no disponible. Consultá con tu farmacéutico."}
                    </TabContent>
                  </Tab>
                </TabContainer>
              </Tabs>

              {/* Edit / Cart buttons */}
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
              ) : null}

              {/* Guardar en perfil (solo si hay sesión) */}
              {user ? (
                <Button onClick={handleOpenEditor}>
                  GUARDAR EN MI PERFIL
                </Button>
              ) : (
                <Button onClick={openAuthModal}>
                  INICIAR SESIÓN PARA GUARDAR
                </Button>
              )}
            </RightColumn>
          </TwoColumnLayout>
        </Content>
      </Modal>

      {/* FormulaEditor fuera del Modal para evitar doble overlay */}
      <FormulaEditor
        product={product}
        originalFormulaContent={formula ?? ""}
        open={editorOpen}
        setOpen={setEditorOpen}
      />
    </>
  );
};

export default ProductModal;
