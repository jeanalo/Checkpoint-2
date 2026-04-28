import { useContext } from "react"
import type { Reservas } from "../Types/ReservasType"

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


    </>
  )
}
