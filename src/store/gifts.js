import { defineStore } from 'pinia'

export const useGiftsStore = defineStore('gifts', {
    state: () => ({
        giftsList: [
            {
                id: 1,
                title: 'Торт',
            },
            {
                id: 2,
                title: 'Листівка',
            },
            {
                id: 3,
                title: 'Шовдарь',
            },
        ],
    }),
    getters: {},
    actions: {
        addGifts(gift) {
            this.giftsList.push({
                id: new Date().getTime(),
                ...gift,
            })
        },
        deleteGifts(giftsId) {
            this.giftsList = this.giftsList.filter((gift) => gift.id !== giftsId)
        },
    },
})
