import { defineStore } from 'pinia'
import {House} from "src/shared/models/House.model";
import {houseApi} from "src/api/modules/houses";

type State = {
    items: House[]
    isLoading: boolean
    page: number
    limit: number
    totalCount: number
    name?: string
    price_from?: number
    price_to?: number
    bathrooms?: number
    bedrooms?: number
    storeys?: number
    garages?: number
}

export const useHousesStore = defineStore('houses', {
    state: (): State => {
        return {
            items: [],
            isLoading: false,
            page: 1,
            limit: 5,
            totalCount: 0,
        }
    },
    actions: {
        getList () {
            this.isLoading = true
            houseApi
                .index({
                    page: this.page,
                    limit: this.limit,
                    name: this.name,
                    price_from: this.price_from,
                    price_to: this.price_to,
                    bedrooms: this.bedrooms,
                    bathrooms: this.bathrooms,
                    storeys: this.storeys,
                    garages: this.garages
                })
                .then(res => {
                    this.items = res.data
                    this.totalCount = res.total
                })
                .finally(() => (this.isLoading = false))
        },
    }
})