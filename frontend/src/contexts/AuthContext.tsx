// Import dependencies
import { createContext, useContext, useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';

// Import assets
import { supabase } from 'lib/supabaseClient';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  authModalOpen: boolean;
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  openAuthModal: () => undefined,
  closeAuthModal: () => undefined,
  authModalOpen: false,
  sidebarOpen: false,
  openSidebar: () => undefined,
  closeSidebar: () => undefined,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      // eslint-disable-next-line @typescript-eslint/naming-convention
      (_authEvent, session) => { setUser(session?.user ?? null); }
    );

    return () => { subscription.unsubscribe(); };
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      authModalOpen,
      openAuthModal: () => setAuthModalOpen(true),
      closeAuthModal: () => setAuthModalOpen(false),
      sidebarOpen,
      openSidebar: () => setSidebarOpen(true),
      closeSidebar: () => setSidebarOpen(false),
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
