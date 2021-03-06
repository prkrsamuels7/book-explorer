import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="auth-container">
      <div className="auth-info">
        <h1>YOMU</h1>
        {showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Already a member? Log In' : "Don't have an account yet? Sign Up"}</button>
      </div>
    </main>
  );
}