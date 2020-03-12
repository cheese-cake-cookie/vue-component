(function () {
    Vue.component('ui-toggle', {
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            toggleColor: {
                type: String,
                default: "#212121"
            },
            round: {
                type: Boolean,
                default: true
            },
            name: {
                type: String,
                default: null
            }
        },
        data: function () {
            return {
                backgroundColor: "#e6e7e8",
                sliderStyle: null
            }
        },
        watch: {
            checked: function (newValue) {
                if (newValue) {
                    this.sliderStyle = {
                        'background-color': this.toggleColor
                    }
                } else {
                    this.sliderStyle = {
                        'background-color': this.backgroundColor
                    }
                }
            }
        },
        template: '' +
            '<label class="ui-toggle" :class="{round: round}">' +
                '<slot></slot>' +
                '<span class="slider" :style="sliderStyle"></span>' +
            '</label>'
    });
}) ();