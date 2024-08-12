import { Routes, Route } from 'react-router-dom';
import SideNav from "./components/SideNav";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import Recurring_Bills from "./pages/Recurring_Bills";
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  return (
  <>
    <Routes >
      <Route path="/" element={<SideNav />} >
        <Route index element={<Overview/>}/>
        <Route path="transactions" element={<Transactions />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="pots" element={<Pots />} />
        <Route path="recur_bills" element={<Recurring_Bills />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes> 
  </>
  );
}

export default App;
