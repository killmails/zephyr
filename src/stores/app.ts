import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import { useStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
  const state = reactive({
    loading: false,
    theme: useStorage('zephyr/app/theme', 'dark')
  })

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
  }

  return { ...toRefs(state), toggleTheme }
})
