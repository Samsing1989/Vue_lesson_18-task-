import { defineStore } from 'pinia'

export const useDesignationStore = defineStore('designation', {
    state: () => ({
        designationsList: [],
    }),
    getters: {},
    actions: {
        addDesignation(designation) {
            this.designationsList.push({
                id: new Date().getTime(),
                ...designation,
            })
        },
        deleteDesignation(designationId) {
            this.designationsList = this.designationsList.filter((designation) => designation.id !== designationId)
        },
    },
})
