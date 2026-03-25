import { supabase } from 'lib/supabaseClient';
import type { SavedFormulaInsert } from 'types/savedFormula';

export const saveFormula = (data: SavedFormulaInsert) =>
  supabase.from('saved_formulas').insert(data).select().single();

export const getSavedFormulas = (userId: string) =>
  supabase
    .from('saved_formulas')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

export const updateSavedFormula = (index: string, data: Partial<SavedFormulaInsert>) =>
  supabase.from('saved_formulas').update(data).eq('id', index).select().single();

export const deleteSavedFormula = (index: string) =>
  supabase.from('saved_formulas').delete().eq('id', index);
