<template>
    <v-app :theme="app.theme">
        <app-loader />
        <app-bar />
        <app-view />
    </v-app>
</template>
<script lang="ts" setup>
import AppBar from '@/components/app/Bar.vue'
import AppLoader from '@/components/app/Loader.vue'
import AppView from '@/components/app/View.vue'
import { useAppStore } from '@/stores/app';

const app = useAppStore()
</script>
