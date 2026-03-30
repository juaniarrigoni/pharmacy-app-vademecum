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
import { saveFormula } from 'services/savedFormulasService';
import { useAuth } from 'contexts/AuthContext';
import type { ProductData } from 'assets/types';

const FormulaEditor: React.FC<{
  product: ProductData;
  originalFormulaContent: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ product, originalFormulaContent, open, setOpen }) => {
  const { user } = useAuth();
  const [customName, setCustomName] = useState('');
  const [editableContent, setEditableContent] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (open) {
      setCustomName(product.nombre === '-' ? '' : product.nombre);
      setEditableContent(originalFormulaContent === '-' ? '' : originalFormulaContent);
      setNotes('');
      setError('');
      setSuccess('');
    }
  }, [open, product, originalFormulaContent]);

  if (!user) return null;

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    setLoading(true);
    setError('');

    /* eslint-disable @typescript-eslint/naming-convention */
    const { error: saveError } = await saveFormula({
      user_id: user.id,
      original_formula_name: product.nombre,
      original_category: product.id ?? '',
      custom_name: customName,
      formula_content: editableContent,
      description: product.descripcion,
      usage_instructions: product.modoDeUso,
      notes,
    });
    /* eslint-enable @typescript-eslint/naming-convention */

    setLoading(false);

    if (saveError) {
      setError('No se pudo guardar. Intentá de nuevo.');
    } else {
      setSuccess('Fórmula guardada en tu perfil.');
      setTimeout(() => {
        setOpen(false);
        setSuccess('');
      }, 1500);
    }
  };

  return (
    <Modal id="FormulaEditor" open={open} setOpen={setOpen} fitContent>
      <h2>Guardar fórmula</h2>
      <h3>{product.nombre}</h3>

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>Nombre personalizado</Label>
          <Input
            type="text"
            value={customName}
            onChange={(changeEvent) => setCustomName(changeEvent.target.value)}
            required
            placeholder="Ej: Mi Fórmula Especial"
          />
        </Field>
        <Field>
          <Label>Fórmula (editable)</Label>
          <Textarea
            value={editableContent}
            onChange={(changeEvent) => setEditableContent(changeEvent.target.value)}
            rows={5}
          />
        </Field>
        <Field>
          <Label>Notas del médico (opcional)</Label>
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
          {loading ? 'Guardando...' : 'Guardar en mi perfil'}
        </SubmitButton>
      </Form>
    </Modal>
  );
};

export default FormulaEditor;
