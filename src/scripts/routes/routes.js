import Main from '../views/pages/Main';
import Detail from '../views/pages/Detail';
import Favorite from '../views/pages/Favorite';

const routes = {
  '/': Main,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
