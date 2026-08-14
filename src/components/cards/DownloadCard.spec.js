import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import DownloadCard from './DownloadCard.vue'

describe('DownloadCard.vue', () => {
  let windowOpenSpy

  beforeEach(() => {
    windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders structural elements and action buttons correctly', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))

    const wrapper = mount(DownloadCard, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    await flushPromises()

    expect(wrapper.find('.featured').exists()).toBe(true)
    expect(wrapper.find('.card-title h2').text()).toBe('Download the latest version!')

    const buttons = wrapper.findAll('button.button-accent')
    expect(buttons).toHaveLength(3)
    expect(buttons[0].text()).toContain('Windows version')
    expect(buttons[1].text()).toContain('Linux version')
    expect(buttons[2].text()).toContain('Android version')
  })

  it('should fallback to default GitHub release URLs when API fetch fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('Network error'))
    )

    const wrapper = mount(DownloadCard, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })

    await flushPromises()

    const buttons = wrapper.findAll('button.button-accent')
    expect(buttons).toHaveLength(3)

    // Windows
    await buttons[0].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-desktop/releases/latest',
      '_blank',
      'noopener,noreferrer'
    )

    // Linux
    await buttons[1].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-desktop/releases/latest',
      '_blank',
      'noopener,noreferrer'
    )

    // Android
    await buttons[2].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-mobile/releases/latest',
      '_blank',
      'noopener,noreferrer'
    )
  })

  it('should parse release assets and update download URLs on successful API response', async () => {
    const desktopRelease = {
      assets: [
        { name: 'stockmachine-v1.0.0.exe', browser_download_url: 'https://github.com/Lumexio/stockmachine-desktop/releases/download/v1.0.0/stockmachine.exe' },
        { name: 'stockmachine-v1.0.0.deb', browser_download_url: 'https://github.com/Lumexio/stockmachine-desktop/releases/download/v1.0.0/stockmachine.deb' }
      ]
    }
    const mobileRelease = {
      assets: [
        { name: 'stockmachine-v1.0.0.apk', browser_download_url: 'https://github.com/Lumexio/stockmachine-mobile/releases/download/v1.0.0/stockmachine.apk' }
      ]
    }

    vi.stubGlobal(
      'fetch',
      vi.fn((url) => {
        if (url.includes('stockmachine-desktop')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(desktopRelease)
          })
        }
        if (url.includes('stockmachine-mobile')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mobileRelease)
          })
        }
        return Promise.resolve({ ok: false })
      })
    )

    const wrapper = mount(DownloadCard, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })

    await flushPromises()

    const buttons = wrapper.findAll('button.button-accent')

    // Windows
    await buttons[0].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-desktop/releases/download/v1.0.0/stockmachine.exe',
      '_blank',
      'noopener,noreferrer'
    )

    // Linux
    await buttons[1].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-desktop/releases/download/v1.0.0/stockmachine.deb',
      '_blank',
      'noopener,noreferrer'
    )

    // Android
    await buttons[2].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-mobile/releases/download/v1.0.0/stockmachine.apk',
      '_blank',
      'noopener,noreferrer'
    )
  })

  it('should retain fallback URLs if response assets do not contain matching extensions', async () => {
    const desktopRelease = {
      assets: [
        { name: 'notes.txt', browser_download_url: 'https://github.com/Lumexio/stockmachine-desktop/releases/download/v1.0.0/notes.txt' }
      ]
    }
    const mobileRelease = {
      assets: []
    }

    vi.stubGlobal(
      'fetch',
      vi.fn((url) => {
        if (url.includes('stockmachine-desktop')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(desktopRelease)
          })
        }
        if (url.includes('stockmachine-mobile')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mobileRelease)
          })
        }
        return Promise.resolve({ ok: false })
      })
    )

    const wrapper = mount(DownloadCard, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })

    await flushPromises()

    const buttons = wrapper.findAll('button.button-accent')

    // Windows button should still use fallback
    await buttons[0].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-desktop/releases/latest',
      '_blank',
      'noopener,noreferrer'
    )

    // Android button should still use fallback
    await buttons[2].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-mobile/releases/latest',
      '_blank',
      'noopener,noreferrer'
    )
  })

  it('handles HTTP error responses (ok = false) gracefully', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404
      })
    )

    const wrapper = mount(DownloadCard, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })

    await flushPromises()

    const buttons = wrapper.findAll('button.button-accent')
    await buttons[0].trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://github.com/Lumexio/stockmachine-desktop/releases/latest',
      '_blank',
      'noopener,noreferrer'
    )
  })
})
