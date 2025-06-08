import About from './About';
import Contact from './Contact';
import HelpCenter from './HelpCenter';
import PrivacyPolicy from './PrivacyPolicy';

export const staticRoutes = [
  {
    path: '/about',
    component: About,
    name: 'About Us'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'Contact Us'
  },
  {
    path: '/help',
    component: HelpCenter,
    name: 'Help Center'
  },
  {
    path: '/privacy',
    component: PrivacyPolicy,
    name: 'Privacy Policy'
  }
];

export default staticRoutes; 