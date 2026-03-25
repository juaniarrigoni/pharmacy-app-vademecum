import { supabase } from 'lib/supabaseClient';

export const signUp = (email: string, password: string, fullName: string) =>
  // eslint-disable-next-line @typescript-eslint/naming-convention
  supabase.auth.signUp({ email, password, options: { data: { full_name: fullName } } });

export const signIn = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

export const signOut = () => supabase.auth.signOut();

export const getSession = () => supabase.auth.getSession();
