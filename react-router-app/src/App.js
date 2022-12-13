import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/mainHeader';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome'></Redirect>
        </Route>
        <Route path='/welcome'><Welcome /></Route>
        <Route path='/products' exact><Products /></Route>
        <Route path='/products/:productId'><ProductDetail /></Route>
      </Switch>
    </div>
  );
}

export default App;


//https://github.com/kononiaka/kononiaka/new/main?filename=README.md&path=%2F&value=-+%F0%9F%91%8B+Hi%2C+I%E2%80%99m+%40kononiaka%0A-+%F0%9F%91%80+I%E2%80%99m+interested+in+...%0A-+%F0%9F%8C%B1+I%E2%80%99m+currently+learning+...%0A-+%F0%9F%92%9E%EF%B8%8F+I%E2%80%99m+looking+to+collaborate+on+...%0A-+%F0%9F%93%AB+How+to+reach+me+...%0A%0A%3C%21---%0Akononiaka%2Fkononiaka+is+a+%E2%9C%A8+special+%E2%9C%A8+repository+because+its+%60README.md%60+%28this+file%29+appears+on+your+GitHub+profile.%0AYou+can+click+the+Preview+link+to+take+a+look+at+your+changes.%0A---%3E%0A