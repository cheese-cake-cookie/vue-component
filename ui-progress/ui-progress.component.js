Vue.component('ui-progress', {
    props: {
        message: {
            type: String,
            default: null
        },
        processCount: {
            type: Number,
            default: 1
        },
        proceedCount: {
            type: Number,
            default: 0
        }
    },
    computed: {
        barStyle: function () {
            var progressBarWidth = this.proceedCount / this.processCount * 100 + "%";
            
            return {"width": progressBarWidth}
        }
    },
    template: '' +
        '<div class="progress-wrap">' +
            '<div class="bar" :style="barStyle">' +
                '<div class="progress"></div>' +
            '</div>' +
            '<span class="label">{{ message }}</span>' +
        '</div>'

})