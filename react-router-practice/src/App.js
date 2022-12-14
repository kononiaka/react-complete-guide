import { Redirect, Route, Switch } from "react-router-dom";
import QuotesDetail from './pages/QuotesDetail';
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

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
      </Switch>
    </Layout>
  );
}

export default App;
