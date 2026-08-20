import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import Navbar from './Navbar.vue'

describe('Navbar.vue', () => {
  let windowOpenSpy
  let pinia

  const RouterLinkStub = {
    template: '<a :href="to" class="logo-link title-icon"><slot /></a>',
    props: ['to']
  }

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders brand title and all navigation links', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
          FontAwesomeIcon: true
        }
      }
    })

    expect(wrapper.text()).toContain('Stock machine')
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Pricing')
    expect(wrapper.text()).toContain('Download')
  })

  it('renders logo image with correct alt text', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
          FontAwesomeIcon: true
        }
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe('stockmachine')
  })

  it('calls themeStore.initTheme on mount', () => {
    const themeStore = useThemeStore()
    const initThemeSpy = vi.spyOn(themeStore, 'initTheme')

    mount(Navbar, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
          FontAwesomeIcon: true
        }
      }
    })

    expect(initThemeSpy).toHaveBeenCalledTimes(1)
  })

  it('updates themeStore when dropdown value changes', async () => {
    const themeStore = useThemeStore()
    const setThemeSpy = vi.spyOn(themeStore, 'setTheme')

    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
          FontAwesomeIcon: true
        }
      }
    })

    const select = wrapper.find('select.theme-select')
    await select.setValue('tokyo-night')

    expect(setThemeSpy).toHaveBeenCalledWith('tokyo-night')
    expect(themeStore.currentTheme).toBe('tokyo-night')
  })

  it('contains all 8 available theme options in dropdown', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
          FontAwesomeIcon: true
        }
      }
    })

    const options = wrapper.findAll('select.theme-select option')
    expect(options).toHaveLength(8)
    const values = options.map(opt => opt.element.value)
    expect(values).toEqual([
      'default-light',
      'default-dark',
      'electron-neon-light',
      'electron-neon-dark',
      'tokyo-day',
      'tokyo-night',
      'newspaper-light',
      'newspaper-dark'
    ])
  })

  it('opens register URL in a new window when Start Free CTA button is clicked', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
          FontAwesomeIcon: true
        }
      }
    })

    const launchBtn = wrapper.find('.launch-web-btn')
    await launchBtn.trigger('click')

    expect(windowOpenSpy).toHaveBeenCalledWith(
      'https://app.stockmachine.online/register',
      '_blank',
      'noopener,noreferrer'
    )
  })
})
