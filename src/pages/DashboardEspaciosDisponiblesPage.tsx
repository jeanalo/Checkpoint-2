import { useContext } from "react"
import type { Reservas } from "../Types/ReservasType"
import { ReservasCard } from "../components/ReservasCard"
import { ReservasContext } from "../context/ReservasContext"

export const DashboardEspaciosDisponiblesPage = () => {
 
  const {espacios, typeFilter, settypeFilter, filterAvailable, setFilterAvailable} = useContext(ReservasContext)
  let reservasFiltradas = espacios

  if (typeFilter !== 'all') {
    reservasFiltradas = reservasFiltradas.filter((item: Reservas) => item.type === typeFilter)
  }

   if (filterAvailable !== 'all') {
    reservasFiltradas = reservasFiltradas.filter((item : Reservas) => item.avaliable  === filterAvailable)
  }
  

  return (
    <>

    <select value={typeFilter} onChange={(e) => settypeFilter(e.target.value)} >


    <option value="meeting room">meeting room</option>
    <option value="private office">private office</option>
    <option value="shared desk">shared desk</option>
    <option value="creative room">creative room</option>

    </select>

    <select value={filterAvailable} onChange={(e) => setFilterAvailable(e.target.value)} >


    <option value="si">SI</option>
    <option value="no">NO</option>
 

    </select>

    <div>
      {reservasFiltradas.map((item: Reservas) => (
        <ReservasCard key={item.id} item={item} />
      )
      )}
    </div>
    </>
  )
}


