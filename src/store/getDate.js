import {defineStore} from 'pinia'

const getDate = defineStore('getDate', {
    state: () => ({
        currentDay: "",
        tomorrowDay: "",
    }),
    getters: {
        getCurrentDay: (state) => state.currentDay,
        getTomorrowDay: (state) => state.tomorrowDay,
    },
    actions: {
        setDate(currentDay, tomorrowDay) {
            this.currentDay = currentDay;
            this.tomorrowDay = tomorrowDay;
        },
    },
})

export default getDate;