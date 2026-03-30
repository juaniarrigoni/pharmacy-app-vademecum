// Import dependencies
import { useState, useEffect } from 'react';

// Import styled components
import {
  Overlay, Panel, Header, UserInfo, UserAvatar, UserEmail, CloseButton,
  SectionTitle, FormulaList, FormulaCard, FormulaCardHeader, FormulaName,
  FormulaPreview, CardActions, ActionButton, EmptyState, Divider,
} from './styled';

// Import inner components
import FormulaDetailModal from '../FormulaDetailModal';

// Import assets
import { useAuth } from 'contexts/AuthContext';
import { getSavedFormulas, deleteSavedFormula } from 'services/savedFormulasService';
import { signOut } from 'services/authService';
import type { SavedFormula } from 'types/savedFormula';

const AccountSidebar: React.FC = () => {
  const { user, sidebarOpen, closeSidebar } = useAuth();
  const [formulas, setFormulas] = useState<Array<SavedFormula>>([]);
  const [loadingFormulas, setLoadingFormulas] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState<SavedFormula | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    if (!sidebarOpen || !user) return;
    setLoadingFormulas(true);
    getSavedFormulas(user.id).then(({ data }) => {
      setFormulas((data as Array<SavedFormula>) ?? []);
      setLoadingFormulas(false);
    });
  }, [sidebarOpen, user]);

  const handleDelete = async (formulaId: string) => {
    await deleteSavedFormula(formulaId);
    setFormulas((previous) => previous.filter((formula) => formula.id !== formulaId));
  };

  const handleEdit = (formula: SavedFormula) => {
    setSelectedFormula(formula);
    setDetailOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
    closeSidebar();
  };

  const handleFormulaUpdated = (updated: SavedFormula) => {
    setFormulas((previous) =>
      previous.map((formula) => (formula.id === updated.id ? updated : formula))
    );
  };

  if (!user) return null;

  const initials = (user.email ?? '?').slice(0, 2).toUpperCase();

  return (
    <>
      <Overlay $open={sidebarOpen} onClick={closeSidebar} />
      <Panel $open={sidebarOpen}>
        <Header>
          <UserInfo>
            <UserAvatar>{initials}</UserAvatar>
            <UserEmail>{user.email}</UserEmail>
          </UserInfo>
          <CloseButton onClick={closeSidebar}>✕</CloseButton>
        </Header>

        <Divider />

        <SectionTitle>Mis fórmulas guardadas</SectionTitle>

        {loadingFormulas && <EmptyState>Cargando...</EmptyState>}

        {!loadingFormulas && formulas.length === 0 && (
          <EmptyState>
            Todavía no guardaste ninguna fórmula. Abrí una fórmula del vademécum y presioná &quot;Guardar en mi perfil&quot;.
          </EmptyState>
        )}

        <FormulaList>
          {formulas.map((formula) => (
            <FormulaCard key={formula.id}>
              <FormulaCardHeader>
                <FormulaName>
                  {(!formula.custom_name || formula.custom_name === '-') ? formula.original_formula_name : formula.custom_name}
                </FormulaName>
              </FormulaCardHeader>
              <FormulaPreview>{formula.formula_content}</FormulaPreview>
              {formula.notes && <FormulaPreview><em>{formula.notes}</em></FormulaPreview>}
              <CardActions>
                <ActionButton $variant="edit" onClick={() => handleEdit(formula)}>
                  Ver
                </ActionButton>
                <ActionButton $variant="delete" onClick={() => handleDelete(formula.id)}>
                  Eliminar
                </ActionButton>
              </CardActions>
            </FormulaCard>
          ))}
        </FormulaList>

        <Divider />

        <ActionButton $variant="signout" onClick={handleSignOut}>
          Cerrar sesión
        </ActionButton>
      </Panel>

      {selectedFormula && (
        <FormulaDetailModal
          key={selectedFormula.id}
          formula={selectedFormula}
          open={detailOpen}
          setOpen={setDetailOpen}
          onUpdated={handleFormulaUpdated}
        />
      )}
    </>
  );
};

export default AccountSidebar;
