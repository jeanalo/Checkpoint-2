
import { Route,Routes } from "react-router-dom";
import { ReservasContextProvider } from "./context/AppContext";
import { DashboardEspaciosDisponiblesPage } from "./pages/DashboardEspaciosDisponiblesPage";
import { ReservasANDResumenPage } from "./pages/ReservasANDResumenPage";
function App() {
	return <>
	<ReservasContextProvider>
	
	<Routes>
	<Route path="/" element={<DashboardEspaciosDisponiblesPage/>} />
	<Route path="/" element={<ReservasANDResumenPage/>} />
	</Routes>

	</ReservasContextProvider>
	
	</>;
}

export default App;
