
import {
	createContext,
	useState,
	type PropsWithChildren,
} from 'react';

import type { Reservas } from '../Types/ReservasType';

export type ReservasContextTypes = {
	espacios: Reservas[];
	reservasRealizadas: Reservas[];
	typeFilter: string;
	setTypeFilter: (item: string) => void
	filterAvailable: string
	setFilterAvailable: (item: string) => void

	
};

export const ReservasContext = createContext<ReservasContextTypes | null>(null);



export function ReservasContextProvider({ children }: PropsWithChildren) {
	const [espacios, setespacios] = useState<Reservas[]>([]);
	const [reservasRealizadas, setReservasRealizadas] = useState<Reservas[]>([])
	const [typeFilter, setTypeFilter] = useState<'all'>()
	const [filterAvailable, setFilterAvailable] = useState<'all'>()

	const




	return <ReservasContext.Provider value={{espacios, setespacios, reservasRealizadas, typeFilter, settypeFilter, filterAvailable, setFilterAvailable}}>{children}</ReservasContext.Provider>;
}
