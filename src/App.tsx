
import { Route,Routes } from "react-router-dom";
import { ReservasContextProvider } from "./context/ReservasContext";
import { DashboardEspaciosDisponiblesPage } from "./pages/DashboardEspaciosDisponiblesPage";
import { ReservasANDResumenPage } from "./pages/ReservasANDResumenPage";
import { Link } from "react-router-dom";
function App() {
	return <>
	<nav>

	<Link to={'/'} >DASHBOARD</Link>
	<Link to={'/reservasyresumen'} >DASHBOARD</Link>

	</nav>
	<ReservasContextProvider>
	
	<Routes>
	<Route path="/" element={<DashboardEspaciosDisponiblesPage/>} />
	<Route path="/reservasyresumen" element={<ReservasANDResumenPage/>} />
	</Routes>

	</ReservasContextProvider>
	
	</>;
}

export default App;
