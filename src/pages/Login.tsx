import { Container } from '@components/Container';
import supabase from '@config/supabase';
import styled from '@emotion/styled';
import useAuth from '@hooks/useAuth';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Navigate } from 'react-router-dom';

const Main = styled.main`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

function Login() {
  const { session } = useAuth();

  if (session) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container
      css={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Main>
        <div>
          <h2
            css={{
              paddingBottom: '10px',
            }}
          >
            Welcome to Gauge
          </h2>
          <p>Login to get access to all the insights.</p>
        </div>

        <Auth
          supabaseClient={supabase}
          providers={['github']}
          appearance={{
            theme: ThemeSupa,
          }}
          showLinks={false}
          onlyThirdPartyProviders
        />
      </Main>
    </Container>
  );
}

export default Login;
