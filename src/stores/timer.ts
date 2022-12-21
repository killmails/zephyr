import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import { useStorage } from '@vueuse/core'

class Timer {
    label: string
    color: string = 'green'

    hh: number = 0
    mm: number = 1
    ss: number = 0
    remaining: number = 60

    interval?: NodeJS.Timer
    running: boolean = false

    edit: boolean = false

    constructor(label: string) {
        this.label = label
    }
}

export const useTimerStore = defineStore('timer', () => {
    const state = reactive({
        timers: useStorage('zephyr/timers', [new Timer('Timer 1')])
    })

    function all() {
        return state.timers
    }

    function one() {
        return state.timers.length === 1
    }

    function add() {
        state.timers.push(new Timer(`Timer ${state.timers.length + 1}`))
    }

    function remove(timer: Timer | null = null) {
        if (null !== timer) {
            state.timers.splice(state.timers.findIndex(element => element === timer), 1)
        } else {
            state.timers = [new Timer('Timer 1')]
        }
    }

    function duration(timer: Timer): number {
        return +timer.hh * 60 * 60 + +timer.mm * 60 + +timer.ss
    }


    function start(timer: Timer) {
        if (timer.running) sync(timer)
        if (timer.interval) return

        timer.interval = setInterval(() => tick(timer), 1000)
        timer.running = true
        timer.edit = false
    }

    function tick(timer: Timer, step: number = 1) {
        timer.remaining -= step

        if (0 < timer.remaining) return

        clearInterval(timer.interval)
        delete timer.interval
    }

    function reset(timer: Timer) {
        tick(timer, timer.remaining)
        sync(timer)
        timer.running = false
    }

    function sync(timer: Timer) {
        timer.remaining = duration(timer)
    }

    return { ...toRefs(state), all, one, add, remove, duration, start, reset, sync }
})
