import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PricingView from './PricingView.vue'

describe('PricingView.vue', () => {
  let windowOpenSpy

  beforeEach(() => {
    windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render header title and description', () => {
    const wrapper = mount(PricingView)
    const header = wrapper.find('.pricing-header')
    expect(header.exists()).toBe(true)
    expect(header.find('h1').text()).toBe('Simple, transparent pricing')
  })

  it('should render all three plan cards with correct tier titles and features', () => {
    const wrapper = mount(PricingView)
    const cards = wrapper.findAll('.pricing-card')
    expect(cards).toHaveLength(3)

    expect(wrapper.text()).toContain('Free')
    expect(wrapper.text()).toContain('Pro')
    expect(wrapper.text()).toContain('Max')

    const proCard = wrapper.find('.pricing-card--pro')
    expect(proCard.exists()).toBe(true)
    const badge = proCard.find('.pricing-card__badge')
    expect(badge.text()).toBe('Most Popular')
  })

  it('should list distinct product limits for each tier', () => {
    const wrapper = mount(PricingView)
    expect(wrapper.text()).toContain('Up to 50 Products')
    expect(wrapper.text()).toContain('Up to 150 Products')
    expect(wrapper.text()).toContain('Up to 500 Products')
  })

  it('should trigger openWebApp with /register when Start Free is clicked', async () => {
    const wrapper = mount(PricingView)
    const startFreeBtn = wrapper.findAll('button').find(b => b.text().includes('Start Free'))
    expect(startFreeBtn).toBeDefined()

    await startFreeBtn.trigger('click')

    expect(windowOpenSpy).toHaveBeenCalledWith(
      'https://app.stockmachine.online/register',
      '_blank',
      'noopener,noreferrer'
    )
  })

  it('should compose correct query parameters for Pro plan buttons', async () => {
    const wrapper = mount(PricingView)
    const buttons = wrapper.findAll('button')

    const proSoloBtn = buttons.find(b => b.text().includes('Continue to Pro Solo'))
    expect(proSoloBtn).toBeDefined()
    await proSoloBtn.trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://app.stockmachine.online/profile?plan=pro&type=individual',
      '_blank',
      'noopener,noreferrer'
    )

    const proOrgBtn = buttons.find(b => b.text().includes('Continue to Pro Org'))
    expect(proOrgBtn).toBeDefined()
    await proOrgBtn.trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://app.stockmachine.online/profile?plan=pro&type=team',
      '_blank',
      'noopener,noreferrer'
    )
  })

  it('should compose correct query parameters for Max plan buttons', async () => {
    const wrapper = mount(PricingView)
    const buttons = wrapper.findAll('button')

    const maxSoloBtn = buttons.find(b => b.text().includes('Continue to Max Solo'))
    expect(maxSoloBtn).toBeDefined()
    await maxSoloBtn.trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://app.stockmachine.online/profile?plan=max&type=individual',
      '_blank',
      'noopener,noreferrer'
    )

    const maxOrgBtn = buttons.find(b => b.text().includes('Continue to Max Org'))
    expect(maxOrgBtn).toBeDefined()
    await maxOrgBtn.trigger('click')
    expect(windowOpenSpy).toHaveBeenLastCalledWith(
      'https://app.stockmachine.online/profile?plan=max&type=team',
      '_blank',
      'noopener,noreferrer'
    )
  })
})
