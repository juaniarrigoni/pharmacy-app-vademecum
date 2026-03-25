// Import dependencies
import { useState, useEffect } from 'react';

// Import styled components
import {
  Form,
  Field,
  Label,
  Textarea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
  OriginalBlock,
  OriginalBlockTitle,
  OriginalBlockContent,
  SectionDivider,
} from './styled';

// Import inner components
import Modal from 'components/general/Modal';

// Import assets
import { updateSavedFormula } from 'services/savedFormulasService';
import type { SavedFormula } from 'types/savedFormula';

const FormulaDetailModal: React.FC<{
  formula: SavedFormula;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdated: (updated: SavedFormula) => void;
}> = ({ formula, open, setOpen, onUpdated }) => {
  const [formulaContent, setFormulaContent] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (open) {
      setFormulaContent(formula.formula_content === '-' ? '' : formula.formula_content);
      setNotes(formula.notes === '-' ? '' : (formula.notes ?? ''));
      setError('');
      setSuccess('');
    }
  }, [open, formula]);

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    setLoading(true);
    setError('');

    /* eslint-disable @typescript-eslint/naming-convention */
    const { data, error: updateError } = await updateSavedFormula(formula.id, {
      formula_content: formulaContent,
      notes,
    });
    /* eslint-enable @typescript-eslint/naming-convention */

    setLoading(false);

    if (updateError) {
      setError('No se pudo guardar. Intentá de nuevo.');
    } else {
      setSuccess('Cambios guardados.');
      onUpdated(data as SavedFormula);
      setTimeout(() => {
        setOpen(false);
        setSuccess('');
      }, 1200);
    }
  };

  return (
    <Modal id="FormulaDetailModal" open={open} setOpen={setOpen} fitContent>
      <h2>Ver fórmula</h2>
      <h3>{formula.custom_name}</h3>
      
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>Fórmula (editable)</Label>
          <Textarea
            value={formulaContent}
            onChange={(changeEvent) => setFormulaContent(changeEvent.target.value)}
            rows={6}
          />
        </Field>
        <Field>
          <Label>Notas del médico</Label>
          <Textarea
            placeholder="Indicaciones, ajustes de dosis, observaciones..."
            value={notes}
            onChange={(changeEvent) => setNotes(changeEvent.target.value)}
            rows={3}
          />
        </Field>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar cambios'}
        </SubmitButton>
      </Form>
    </Modal>
  );
};

export default FormulaDetailModal;
