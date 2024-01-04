import styled from '@emotion/styled';
import { Sidebar, ProfileSection } from './Sidebar';
import useAuth from '@hooks/useAuth';
import { Container, LayoutContainer } from './Container';
import ProfileCard from './ProfileCard';
import { Menu, MenuItem } from './Menu';
import { menuItems, user } from '@mock/dashboard';
import { useRef, useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode | JSX.Element;
}

// Styled component for the main content area
const MainContent = styled.main`
  flex-grow: 1;
  overflow: scroll;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerIconRef = useRef<HTMLButtonElement>(null);
  const { signOut } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      hamburgerIconRef.current?.classList.add('open');
    } else {
      hamburgerIconRef.current?.classList.remove('open');
    }
  };

  return (
    <LayoutContainer>
      <Container>
        <Sidebar>
          <Header>
            <img
              src="https://placehold.co/100?text=Company"
              width={50}
              height={50}
              alt="Company Logo"
              css={{
                borderRadius: '50%',
              }}
            />
            <HamburgerIcon ref={hamburgerIconRef} onClick={toggleMenu}>
              <div />
              <div />
              <div />
            </HamburgerIcon>
          </Header>
          <ProfileSection isOpen={isOpen}>
            <Avatar src={user.avatar} alt="User avatar" />
            <div
              css={{
                fontWeight: 'bold',
              }}
            >
              {user.name}
            </div>
          </ProfileSection>
          <Menu isOpen={isOpen}>
            {menuItems.map((item) => (
              <MenuItem key={item.name} className={item.active ? 'active' : ''}>
                {item.label}
              </MenuItem>
            ))}
            <MenuItem
              css={{
                color: 'red',
              }}
              onClick={signOut}
            >
              Sign Out
            </MenuItem>
          </Menu>
        </Sidebar>
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
