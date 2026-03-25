-- Farmacéuticos Asociados — Schema Supabase
-- Ejecutar en: Panel → SQL Editor → New query

-- Perfiles de usuario
CREATE TABLE public.profiles (
  id              UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name       TEXT,
  role            TEXT CHECK (role IN ('medico', 'paciente', 'admin')) DEFAULT 'medico',
  specialty       TEXT,
  license_number  TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Fórmulas personalizadas
CREATE TABLE public.saved_formulas (
  id                    UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id               UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  original_formula_name TEXT NOT NULL,
  original_category     TEXT NOT NULL,
  custom_name           TEXT NOT NULL,
  formula_content       TEXT NOT NULL,
  description           TEXT,
  usage_instructions    TEXT,
  notes                 TEXT,
  created_at            TIMESTAMPTZ DEFAULT NOW(),
  updated_at            TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (cada usuario solo ve sus propios datos)
ALTER TABLE public.profiles       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_formulas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own_profile"
  ON public.profiles FOR ALL
  USING (auth.uid() = id);

CREATE POLICY "own_formulas"
  ON public.saved_formulas FOR ALL
  USING (auth.uid() = user_id);

-- Trigger: crear perfil automáticamente al registrarse
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', 'medico');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
