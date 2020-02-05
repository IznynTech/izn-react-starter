//
// Router config
//
import Homepage from '../../pages/Homepage/Loadable';

export default [
  {
    name: 'Homepage',
    path: '/',
    component: Homepage,
    exact: true,
    requiresAuth: false,
  },
];
