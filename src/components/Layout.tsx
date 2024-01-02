import styled from '@emotion/styled';
import { mq } from '@helpers/style';
import Header from './Header';
import Sidebar from './Sidebar';
import Container from './Container';
import useAuth from '@hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode | JSX.Element;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${mq('md')} {
    flex-direction: column;
  }
`;

// Styled component for the main content area
const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

const Layout = ({ children }: LayoutProps) => {
  const { signOut } = useAuth();
  return (
    <LayoutContainer>
      <Header>
        <div>
          <p>Header Content</p> <button onClick={signOut}> Sign Out </button>
        </div>
      </Header>
      <Container>
        <Sidebar>Sidebar Content</Sidebar>
        <MainContent>{children}</MainContent>
      </Container>
    </LayoutContainer>
  );
};

export default Layout;
