import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import LandingPage from '@/pages/LandingPage';
import ScriptWizard from '@/pages/ScriptWizard';
import ScriptOutput from '@/pages/ScriptOutput';
import SavedScripts from '@/pages/SavedScripts';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import Navbar from '@/components/layout/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wizard" element={<ScriptWizard />} />
          <Route path="/script/:id" element={<ScriptOutput />} />
          <Route path="/saved-scripts" element={<SavedScripts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;