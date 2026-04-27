export type Reservas = {

    id: number
    name: string
    type: string
    location: string
    pricePerHour: number
    avaliable: 'disponible' | 'ocupado'
}