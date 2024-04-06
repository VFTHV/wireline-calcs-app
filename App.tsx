import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontsLoadedContainer from './components/FontsLoadedContainer';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigation from './pages/Navigation';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <FontsLoadedContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </FontsLoadedContainer>
  );
}
