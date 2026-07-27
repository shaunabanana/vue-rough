<template>
    <canvas
        :width="width"
        :height="height"
    >
        <slot v-if="rough" />
    </canvas>
</template>

<script>
    import rough from 'roughjs/bundled/rough.esm.js';

    export default {
        name: 'RoughCanvas',
        props: {
            width: String,
            height: String,
            config: Object
        },
        data() {
            return {
                rough: null,
                children: [],
                rendering: false,
                rerenderPending: false
            };
        },
        mounted() {
            this.rough = rough.canvas(this.$el, this.config);
        },
        methods: {
            register(child) {
                if (!this.children.includes(child)) {
                    this.children.push(child);
                }
            },
            unregister(child) {
                const index = this.children.indexOf(child);

                if (index !== -1) {
                    this.children.splice(index, 1);
                }
            },
            clearCanvas() {
                if (this.rendering) {
                    this.rerenderPending = true;

                    return;
                }

                this.rendering = true;
                this.rough.ctx.clearRect(0, 0, this.rough.canvas.width, this.rough.canvas.height);

                this.children.forEach((child) => {
                    child.handler(true);
                });

                this.$nextTick().then(() => {
                    this.rendering = false;

                    if (this.rerenderPending) {
                        this.rerenderPending = false;
                        this.clearCanvas();
                    }
                });
            }
        }
    };
</script>
