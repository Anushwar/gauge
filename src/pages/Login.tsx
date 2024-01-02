import supabase from '@config/supabase';
import styled from '@emotion/styled';
import useAuth from '@hooks/useAuth';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Navigate } from 'react-router-dom';

const Container = styled.div`
  background-color: #ffffff;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Content = styled.div`
  flex-basis: 100%;
`;

function Login() {
  const { session } = useAuth();

  if (session) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <div
        css={{
          width: '768px',
        }}
      >
        <h2
          css={{
            paddingBottom: '10px',
          }}
        >
          Welcome to Gauge
        </h2>
        <p>Login to get access to all the insights.</p>
        <Main>
          <Content>
            <Auth
              supabaseClient={supabase}
              providers={['github']}
              appearance={{
                theme: ThemeSupa,
              }}
              showLinks={false}
              onlyThirdPartyProviders
            />
          </Content>
        </Main>
      </div>
    </Container>
  );
}

export default Login;
