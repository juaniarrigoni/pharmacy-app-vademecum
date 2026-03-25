// Import dependencies
import { useState } from 'react';

// Import styled components
import {
  Tabs, Tab, Form, Input, SubmitButton, ErrorMessage, SuccessMessage,
} from './styled';

// Import inner components
import Modal from 'components/general/Modal';

// Import assets
import { signIn, signUp, signOut } from 'services/authService';
import { useAuth } from 'contexts/AuthContext';

const AuthModal: React.FC = () => {
  const { user, authModalOpen, closeAuthModal } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('juani.arrigoni@gmail.com');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setError('');
    setSuccess('');
  };

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    resetForm();
  };

  const handleLogin = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    setLoading(true);
    setError('');
    const { error: authError } = await signIn(email, password);
    setLoading(false);
    if (authError) {
      const { code } = authError as { code?: string };
      if (code === 'over_email_send_rate_limit') {
        setError('Demasiados intentos. Esperá unos minutos.');
      } else if (code === 'email_not_confirmed') {
        setError('Confirmá tu email antes de ingresar. Revisá tu bandeja.');
      } else {
        setError('Email o contraseña incorrectos.');
      }
    } else {
      closeAuthModal();
      resetForm();
    }
  };

  const getAuthErrorMessage = (code: string | undefined): string => {
    if (code === 'weak_password') return 'La contraseña debe tener al menos 6 caracteres.';
    if (code === 'over_email_send_rate_limit') return 'Demasiados intentos. Esperá unos minutos.';
    if (code === 'user_already_exists' || code === 'email_address_already_in_use') return 'Ya existe una cuenta con ese email.';
    if (code === 'invalid_email') return 'El email no es válido.';
    return 'No se pudo crear la cuenta. Intentá de nuevo.';
  };

  const handleRegister = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: authError } = await signUp(email, password, fullName);
    setLoading(false);
    if (authError) {
      const { code } = authError as { code?: string };
      setError(getAuthErrorMessage(code));
    } else {
      setSuccess('Cuenta creada. Revisá tu email para confirmar el registro.');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    closeAuthModal();
  };

  if (user) {
    return (
      <Modal id="AuthModal" open={authModalOpen} setOpen={closeAuthModal} fitContent>
        <h2>Mi cuenta</h2>
        <h3>{user.email}</h3>
        <SubmitButton type="button" onClick={handleSignOut}>
          Cerrar sesión
        </SubmitButton>
      </Modal>
    );
  }

  return (
    <Modal id="AuthModal" open={authModalOpen} setOpen={closeAuthModal} fitContent>
      <h2>Acceso médicos</h2>
      <Tabs>
        <Tab $active={activeTab === 'login'} onClick={() => handleTabChange('login')}>
          Iniciar sesión
        </Tab>
        <Tab $active={activeTab === 'register'} onClick={() => handleTabChange('register')}>
          Registrarse
        </Tab>
      </Tabs>

      {activeTab === 'login' ? (
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(changeEvent) => setEmail(changeEvent.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(changeEvent) => setPassword(changeEvent.target.value)}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Ingresando...' : 'Iniciar sesión'}
          </SubmitButton>
        </Form>
      ) : (
        <Form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Nombre completo"
            value={fullName}
            onChange={(changeEvent) => setFullName(changeEvent.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(changeEvent) => setEmail(changeEvent.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Contraseña (mín. 6 caracteres)"
            value={password}
            onChange={(changeEvent) => setPassword(changeEvent.target.value)}
            minLength={6}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Registrarse'}
          </SubmitButton>
        </Form>
      )}
    </Modal>
  );
};

export default AuthModal;
