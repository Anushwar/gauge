import { AuthContext } from '@providers/Auth';
import { useContext } from 'react';

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
