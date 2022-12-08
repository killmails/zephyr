<template>
    <v-progress-linear v-if="app.loading" class="app-loader" color="primary" indeterminate />
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const app = useAppStore()
</script>

<style lang="scss" scoped>
.app-loader {
    position: fixed;
    z-index: 1010;
}
</style>
