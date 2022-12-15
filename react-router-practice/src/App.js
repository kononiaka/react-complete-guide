import { Redirect, Route, Switch } from "react-router-dom";
import QuotesDetail from './pages/QuotesDetail';
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact><AllQuotes></AllQuotes></Route>
        <Route path="/quotes/:quoteId"><QuotesDetail></QuotesDetail></Route>
        <Route path="/new-quote"><NewQuote></NewQuote></Route>
        <Route path='*'><NotFound></NotFound></Route>
      </Switch>
    </Layout>
  );
}

export default App;
