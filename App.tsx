import FontsLoadedContainer from './components/FontsLoadedContainer';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigation from './pages/Navigation';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <FontsLoadedContainer>
      <Provider store={store}>
        <Navigation />
        <Toast />
      </Provider>
    </FontsLoadedContainer>
  );
}
