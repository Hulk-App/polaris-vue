<template>
    <div class="Polaris-Filters-ConnectedFilterControl__Item">
        <slot />
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class PFilterItem extends Vue {

    }
</script>
