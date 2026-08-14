import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useThemeStore } from './theme'

describe('Theme Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  it('should initialize currentTheme with default-light when localStorage is empty', () => {
    const store = useThemeStore()
    expect(store.currentTheme).toBe('default-light')
  })

  it('should initialize currentTheme with saved theme from localStorage', () => {
    localStorage.setItem('stockmachine_theme', 'tokyo-night')
    const store = useThemeStore()
    expect(store.currentTheme).toBe('tokyo-night')
  })

  it('should set data-theme attribute on documentElement when initTheme is called', () => {
    const store = useThemeStore()
    store.initTheme()
    expect(document.documentElement.getAttribute('data-theme')).toBe('default-light')
  })

  it('should update currentTheme, localStorage, and data-theme attribute when setTheme is called', () => {
    const store = useThemeStore()
    store.setTheme('electron-neon-dark')

    expect(store.currentTheme).toBe('electron-neon-dark')
    expect(localStorage.getItem('stockmachine_theme')).toBe('electron-neon-dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('electron-neon-dark')
  })

  it('should apply pre-seeded localStorage theme to documentElement on initTheme', () => {
    localStorage.setItem('stockmachine_theme', 'cyberpunk')
    const store = useThemeStore()
    store.initTheme()
    expect(document.documentElement.getAttribute('data-theme')).toBe('cyberpunk')
  })
})
