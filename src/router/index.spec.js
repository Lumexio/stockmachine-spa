import { describe, it, expect, beforeEach } from 'vitest'
import router from './index'

describe('Router Configuration', () => {
  beforeEach(async () => {
    await router.push('/')
    await router.isReady()
  })

  it('should have correct route definitions configured', () => {
    const routes = router.getRoutes()
    expect(routes).toHaveLength(3)

    const homeRoute = routes.find(r => r.name === 'Home')
    expect(homeRoute).toBeDefined()
    expect(homeRoute.path).toBe('/')

    const downloadRoute = routes.find(r => r.name === 'Download')
    expect(downloadRoute).toBeDefined()
    expect(downloadRoute.path).toBe('/download')

    const pricingRoute = routes.find(r => r.name === 'Pricing')
    expect(pricingRoute).toBeDefined()
    expect(pricingRoute.path).toBe('/pricing')
  })

  it('should navigate to Home route (/) correctly', async () => {
    await router.push('/')
    await router.isReady()
    expect(router.currentRoute.value.path).toBe('/')
    expect(router.currentRoute.value.name).toBe('Home')
  })

  it('should navigate to Download route (/download) correctly', async () => {
    await router.push('/download')
    await router.isReady()
    expect(router.currentRoute.value.path).toBe('/download')
    expect(router.currentRoute.value.name).toBe('Download')
  })

  it('should navigate to Pricing route (/pricing) correctly', async () => {
    await router.push('/pricing')
    await router.isReady()
    expect(router.currentRoute.value.path).toBe('/pricing')
    expect(router.currentRoute.value.name).toBe('Pricing')
  })

  it('should handle navigation by route name', async () => {
    await router.push({ name: 'Pricing' })
    await router.isReady()
    expect(router.currentRoute.value.path).toBe('/pricing')
    expect(router.currentRoute.value.name).toBe('Pricing')
  })

  it('should verify lazy-loaded component resolution for Download route', async () => {
    const downloadRoute = router.getRoutes().find(r => r.name === 'Download')
    expect(downloadRoute.components.default).toBeDefined()

    await router.push('/download')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('Download')
  })

  it('should verify lazy-loaded component resolution for Pricing route', async () => {
    const pricingRoute = router.getRoutes().find(r => r.name === 'Pricing')
    expect(pricingRoute.components.default).toBeDefined()

    await router.push('/pricing')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('Pricing')
  })
})
