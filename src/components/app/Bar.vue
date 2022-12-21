<template>
    <v-app-bar>

        <v-container class="d-flex align-center">

            <v-btn :to="{ name: 'about' }" class="me-4" color="primary" size="large" variant="plain">
                <zphr />
            </v-btn>

            <v-btn :to="{ name: 'timer' }">Timer</v-btn>

            <v-spacer />

            <v-btn color="secondary" variant="outlined" :href="referralLink" target="_blank">
                Play EVE Online
            </v-btn>

            <v-divider class="mx-4" vertical />

            <v-btn icon :onclick="app.toggleTheme">
                <v-icon :icon="mdiThemeLightDark" />
                <v-tooltip :text="`${app.theme === 'dark' ? 'Light' : 'Dark'} Mode`" activator="parent"
                    location="bottom" />
            </v-btn>

            <v-btn icon href="https://github.com/killmails/zephyr" target="_blank">
                <v-icon :icon="mdiGithub" />
                <v-tooltip text="Zephyr is Free" activator="parent" location="bottom" />
            </v-btn>

        </v-container>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { mdiGithub, mdiThemeLightDark } from '@mdi/js'

import Zphr from '../Zphr.vue';

const app = useAppStore()
const referralLink = import.meta.env.VITE_REFERRAL_LINK || 'https://www.eveonline.com/signup'
</script>
