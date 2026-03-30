// Import dependencies
import { useState, useEffect } from 'react';

// Import styled components
import {
  Form,
  Field,
  Label,
  Input,
  Textarea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
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
  const [customName, setCustomName] = useState('');
  const [formulaContent, setFormulaContent] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (open) {
      setCustomName(formula.custom_name === '-' ? '' : formula.custom_name);
      setFormulaContent(formula.formula_content === '-' ? '' : formula.formula_content);
      setNotes(formula.notes === '-' ? '' : (formula.notes ?? ''));
      setError('');
      setSuccess('');
    }
    // formula.id is intentional — we only reset when a different formula is opened
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, formula.id]);

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    setLoading(true);
    setError('');

    /* eslint-disable @typescript-eslint/naming-convention */
    const { data, error: updateError } = await updateSavedFormula(formula.id, {
      custom_name: customName,
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
      <h2>Editar fórmula</h2>
      <h3>{formula.original_formula_name}</h3>

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>Nombre personalizado</Label>
          <Input
            type="text"
            value={customName}
            onChange={(changeEvent) => setCustomName(changeEvent.target.value)}
            required
          />
        </Field>
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
