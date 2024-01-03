const user = {
  name: 'Jane Doe',
  email: 'jane@doe.com',
  role: 'CEO',
  avatar: 'https://placehold.co/100',
};

// Mock menu items data
const menuItems = [
  { name: 'dashboard', label: 'Dashboard', path: '/dashboard', active: true },
  {
    name: 'credit-details',
    label: 'Credit Details',
    path: '/credit',
    active: false,
  },
  {
    name: 'financial-information',
    label: 'Financial Information',
    path: '/finance',
    active: false,
  },
  {
    name: 'financial-analysis',
    label: 'Financial Analysis',
    path: '/finance-analysis',
    active: false,
  },
  { name: 'documents', label: 'Documents', path: '/documents', active: false },
  { name: 'messages', label: 'Messages', path: '/messages', active: false },
  { name: 'settings', label: 'Settings', path: '/settings', active: false },
  { name: 'support', label: 'Support', path: '/support', active: false },
];

export { user, menuItems };
