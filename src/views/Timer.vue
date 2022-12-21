<template>
    <v-row>
        <v-col v-for="timer in timers.all()">
            <v-card :title="timer.label" :subtitle="hhmmss(timers.duration(timer))">
                <v-card-text>

                    <p class="text-h3">
                        {{ hhmmss(timer.remaining) }}
                    </p>

                    <v-progress-linear height="12" :color="timer.color"
                        :model-value="(timer.remaining / timers.duration(timer)) * 100" :striped="timer.running"
                        rounded />

                </v-card-text>
                <v-card-actions>

                    <v-btn :color="timer.running ? 'primary' : 'success'" @click="timers.start(timer)"
                        :disabled="!timer.running && timer.remaining < 1">
                        {{ timer.running ? 'Restart' : 'Start' }}
                    </v-btn>

                    <v-btn color="secondary" @click="timers.reset(timer)">Reset</v-btn>

                    <v-spacer />

                    <v-btn color="info" size="small" :icon="mdiPencil" @click="timer.edit = !timer.edit"
                        :disabled="timer.running" />

                    <v-btn color="warning" size="small" :icon="mdiTrashCan" @click="timers.remove(timer)"
                        v-if="!timers.one()" />

                </v-card-actions>

                <v-expand-transition>
                    <div v-show="timer.edit">
                        <v-divider></v-divider>

                        <v-card-text>
                            <v-text-field variant="outlined" density="compact" label="Label" v-model="timer.label" />
                            <v-row>
                                <v-col>
                                    <v-text-field variant="outlined" density="compact" type="number" min="0" max="99"
                                        label="HH" v-model="timer.hh" @change="timers.sync(timer)" />

                                </v-col>
                                <v-col>
                                    <v-text-field variant="outlined" density="compact" type="number" min="0" max="59"
                                        label="MM" v-model="timer.mm" @change="timers.sync(timer)" />
                                </v-col>
                                <v-col>
                                    <v-text-field variant="outlined" density="compact" type="number" min="0" max="59"
                                        label="SS" v-model="timer.ss" @change="timers.sync(timer)" />
                                </v-col>
                            </v-row>

                            <v-select variant="outlined" density="compact" label="Color" v-model="timer.color"
                                :items="colors" />

                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col class="d-flex justify-space-around">

            <v-btn color="success" :prepend-icon="mdiPlus" @click="timers.add()">Add Timer</v-btn>

            <v-spacer />

            <v-btn color="warning" :prepend-icon="mdiTrashCan" @click="timers.remove()">Remove All</v-btn>

        </v-col>
    </v-row>

</template>

<script lang="ts" setup>
import { useTimerStore } from '@/stores/timer'
import { mdiPencil, mdiPlus, mdiTrashCan } from '@mdi/js';

const hhmmss = (seconds: number): string => {
    return `${Math.floor(seconds / 60 / 60)}:`.padStart(3, '0')
        + `${Math.floor(seconds / 60 % 60)}:`.padStart(3, '0')
        + `${Math.floor(seconds % 60)}`.padStart(2, '0')
}

const colors = [
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'brown',
    'grey'
]

const timers = useTimerStore()
</script>