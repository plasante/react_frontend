// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};
const isLoginEnabled = true;

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    isLoginEnabled
      ? {
          id: 'login1',
          title: 'Login',
          type: 'item',
          url: '/login',
          icon: icons.LoginOutlined,
          target: true
        }
      : {
          id: 'disabledLogin',
          title: 'Login (Disabled)',
          type: 'item',
          icon: icons.LoginOutlined,
          url: '/disabled-login',
          target: true,
          disabled: true
        },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true,
      disabled: true
    }
  ].filter(Boolean)
};

export default pages;
