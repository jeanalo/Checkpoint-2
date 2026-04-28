import { useContext } from "react"
import type { Reservas } from "../Types/ReservasType"
export const ReservasCard = ({item}: {item: Reservas}) => {

const {cancelReservations} = useContext(ReservasContext)
  return (
    <>
    <h1>RESERVAS</h1>
    <p>{item.id}</p>
    <p>{item.name}</p>
    <p>{item.type}</p>
    <p>{item.pricePerHour}</p>
    <p>{item.avaliable}</p>
    <button onClick={() => cancelReservations(item.id)} >Cancelar reserva</button>
    </>
  )
}
