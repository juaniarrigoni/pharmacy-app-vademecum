export interface SavedFormula {
  id: string;
  user_id: string;
  original_formula_name: string;
  original_category: string;
  original_formula_content?: string;
  custom_name: string;
  formula_content: string;
  description?: string;
  usage_instructions?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export type SavedFormulaInsert = Omit<SavedFormula, 'id' | 'created_at' | 'updated_at'>;
