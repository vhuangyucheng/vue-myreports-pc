import {defineStore} from 'pinia'

const getAlertList = defineStore('getAlertList', {
    state: () => ({
        alertList: []
    }),
    getters: {
        getAlertList: (state) => state.alertList,
    },
    actions: {
        alertListPush(newAlert) {
            this.alertList.push(newAlert)
        },
    },
})

export default getAlertList;