import styled from '@emotion/styled';
import Header from './Header';
import Sidebar from './Sidebar';
import useAuth from '@hooks/useAuth';
import { Container, LayoutContainer } from './Container';
import ProfileCard from './ProfileCard';

interface LayoutProps {
  children: React.ReactNode | JSX.Element;
}

// Styled component for the main content area
const MainContent = styled.main`
  flex-grow: 1;
  overflow: scroll;
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
        <div
          css={{
            width: '100%',
            height: 'auto',
            overflow: 'auto',
          }}
        >
          <ProfileCard
            companyName="Sample Org Private Limited"
            cin="123456789"
            profilePicUrl="https://placehold.co/500?text=Company"
          />
          <MainContent>{children}</MainContent>
        </div>
      </Container>
    </LayoutContainer>
  );
};

export default Layout;
