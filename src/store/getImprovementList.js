import {defineStore} from 'pinia'

const getImprovementList = defineStore('getImprovementList', {
    state: () => ({
        improvementList: {
            line1:[],
            line2:[]
        }
    }),
    getters: {
        getLine1ImprovementList: (state) => state.improvementList.line1,
        getLine2ImprovementList: (state) => state.improvementList.line2,
    },
    actions: {
        line1ImprovementListPush(newAlert) {
            this.improvementList.line1.push(newAlert)
        },
        line2ImprovementListPush(newAlert) {
            this.improvementList.line2.push(newAlert)
        },
        clear() {
            this.improvementList.line1 = []
            this.improvementList.line2 = []
        },
    },
})

export default getImprovementList;