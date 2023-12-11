import {defaultApiInstance} from "src/api/instances/defaultApiInstance";
import {House} from "src/shared/models/House.model";

const houseApi = {
    async index (params?: {
        page?: number;
        limit?: number;
        name?: string,
        price_from?: number,
        price_to?: number,
        bathrooms?: number,
        bedrooms?: number,
        storeys?: number,
        garages?: number
    })
    {
        const res = await defaultApiInstance.get<{
            total: number;
            data: House[];
        }>('/houses', { params })
        return res.data
    },
    async show (houseId: number) {
        const res = await defaultApiInstance.get<House>(`/houses/${houseId}`)
        return res.data
    },
}

export { houseApi }
