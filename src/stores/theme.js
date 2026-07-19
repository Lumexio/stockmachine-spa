import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref(localStorage.getItem('stockmachine_theme') || 'default-light');

  function setTheme(theme) {
    currentTheme.value = theme;
    localStorage.setItem('stockmachine_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme.value);
  }

  return {
    currentTheme,
    setTheme,
    initTheme,
  };
});
