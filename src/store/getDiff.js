import {defineStore} from 'pinia'

const getDiff = defineStore('getDiff', {
    state: () => ({
        wipDiff: "",
    }),
    getters: {
        getWipDiff: (state) => state.wipDiff,
    },
    actions: {
        setWipDiff(wipDff) {
            this.wipDiff = wipDff;
        },
    },
})

export default getDiff;