import { Provider } from 'react-redux';
import configureStore from 'store';
import AppRoutes from 'routes';
import { Header } from 'components';
import './App.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Header />
      <AppRoutes />
    </React.Fragment>
  </Provider>
);

export default App;
