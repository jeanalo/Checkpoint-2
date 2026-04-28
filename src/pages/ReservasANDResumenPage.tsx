import { useContext } from "react"
import { ReservasContext } from "../context/ReservasContext"
import { Reservas } from "../Types/ReservasType"
export const ReservasANDResumenPage = () => {

    const {espacios, reservasRealizadas} = useContext(ReservasContext)
    const totales = espacios.length
    const disponibles = espacios.filter((filtro: Reservas) => filtro.avaliable === 'si').length
    const reservasActivas  = reservasRealizadas.length
    

    

  return (
    <>
    
    <h1>TOTALES</h1>
    <p>Total: {totales}</p>
    <p>disponibles: {disponibles}</p>
    <p> Activas: {reservasActivas}</p>
    
    
    </>
  )
}
