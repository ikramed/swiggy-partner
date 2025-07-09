import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import TermsAndConditions from "@/pages/TermsAndConditions";
function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
