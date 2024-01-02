import ProtectedRoute from '@components/ProtectedRoute';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import { AuthProvider } from '@providers/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
