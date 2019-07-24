/**
 * 添加loading 懒加载react-loadable
 */
import {Loading} from '../components'
import Loadable from 'react-loadable';

const DashBoard = Loadable({
    loader: () => import('./dashboard'),
    loading: Loading,
  });
const NotFound = Loadable({
    loader: () => import('./notfound'),
    loading: Loading,
  });
const Setting = Loadable({
    loader: () => import('./setting'),
    loading: Loading,
  });
const Ariticle = Loadable({
    loader: () => import('./article'),
    loading: Loading,
  });

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
  });


export{
    DashBoard,
    Login,
    NotFound,
    Setting,
    Ariticle
}



