(function () {
    Vue.component('ui-table', {
        props: {
            header: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            data: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        computed: {
            rowspan: function() {
                for (var i in this.header) {
                    if (typeof this.header[i] === 'object') {
                        return 2;
                    }
                }
                return 1;
            }
        },
        mounted: function () {
            console.log(this.rowspan);
        },
        template: `
            <div class="pb-table-component">
                <div class="wrap">
                <div class="header">
                    <div v-for="item in header">{{ item }}</div>
                </div>
                </div>
            </div>
        `
    });
}) ();