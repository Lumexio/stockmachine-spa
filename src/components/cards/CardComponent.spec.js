import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardComponent from './CardComponent.vue'

describe('CardComponent.vue', () => {
  it('renders with default props and default classes', () => {
    const wrapper = mount(CardComponent)

    expect(wrapper.classes()).toContain('card')
    expect(wrapper.classes()).toContain('elevation-1')
    expect(wrapper.classes()).toContain('size-medium')
    expect(wrapper.classes()).toContain('variant-default')
    expect(wrapper.classes()).toContain('has-border')
    expect(wrapper.classes()).toContain('rounded')
    expect(wrapper.classes()).not.toContain('hover-effect')

    // Expect optional sections not to render when empty
    expect(wrapper.find('.card-header').exists()).toBe(false)
    expect(wrapper.find('.card-image').exists()).toBe(false)
    expect(wrapper.find('.card-content').exists()).toBe(false)
    expect(wrapper.find('.card-footer').exists()).toBe(false)

    // Style check
    expect(wrapper.attributes('style')).toContain('width: 100%')
  })

  it('applies variant, size, and elevation props to root element classes', () => {
    const wrapper = mount(CardComponent, {
      props: {
        variant: 'info',
        size: 'large',
        elevation: 4
      }
    })

    expect(wrapper.classes()).toContain('variant-info')
    expect(wrapper.classes()).toContain('size-large')
    expect(wrapper.classes()).toContain('elevation-4')
  })

  it('validates elevation prop validator', () => {
    const validator = CardComponent.props.elevation.validator
    expect(validator(0)).toBe(true)
    expect(validator(3)).toBe(true)
    expect(validator(5)).toBe(true)
    expect(validator('2')).toBe(true)
    expect(validator(-1)).toBe(false)
    expect(validator(6)).toBe(false)
  })

  it('handles boolean display flags: border, rounded, hoverEffect', () => {
    const wrapper = mount(CardComponent, {
      props: {
        border: false,
        rounded: false,
        hoverEffect: true
      }
    })

    expect(wrapper.classes()).not.toContain('has-border')
    expect(wrapper.classes()).not.toContain('rounded')
    expect(wrapper.classes()).toContain('hover-effect')
  })

  it('applies customClass and customStyle props', () => {
    const wrapper = mount(CardComponent, {
      props: {
        customClass: 'custom-card-theme',
        customStyle: { backgroundColor: 'rgb(240, 240, 240)' },
        width: '500px'
      }
    })

    expect(wrapper.classes()).toContain('custom-card-theme')
    expect(wrapper.attributes('style')).toContain('width: 500px')
    expect(wrapper.attributes('style')).toContain('background-color: rgb(240, 240, 240)')
  })

  it('renders header section with title and icon when props are passed', () => {
    const wrapper = mount(CardComponent, {
      props: {
        title: 'Card Title Test',
        iconName: 'icon-star'
      }
    })

    const header = wrapper.find('.card-header')
    expect(header.exists()).toBe(true)
    expect(header.find('h3.card-title').text()).toBe('Card Title Test')
    expect(header.find('img').classes()).toContain('icon-star')
  })

  it('renders custom header slot instead of default title/icon template', () => {
    const wrapper = mount(CardComponent, {
      props: {
        title: 'Ignored Title'
      },
      slots: {
        header: '<div class="custom-header">Custom Slot Header</div>'
      }
    })

    const header = wrapper.find('.card-header')
    expect(header.exists()).toBe(true)
    expect(header.find('.custom-header').text()).toBe('Custom Slot Header')
    expect(header.find('.card-title').exists()).toBe(false)
  })

  it('renders custom image slot when provided', () => {
    const wrapper = mount(CardComponent, {
      slots: {
        image: '<img src="test.png" alt="Card banner" />'
      }
    })

    const imageSection = wrapper.find('.card-image')
    expect(imageSection.exists()).toBe(true)
    expect(imageSection.find('img').attributes('src')).toBe('test.png')
  })

  it('renders content section and passes scoped contents prop when contents.length is truthy', () => {
    const wrapper = mount(CardComponent, {
      props: {
        contents: ['Item 1', 'Item 2'],
        noPadding: true
      },
      slots: {
        default: `<template #default="slotProps">
          <ul>
            <li v-for="item in slotProps.contents" :key="item">{{ item }}</li>
          </ul>
        </template>`
      }
    })

    const contentSection = wrapper.find('.card-content')
    expect(contentSection.exists()).toBe(true)
    expect(contentSection.classes()).toContain('no-padding')
    expect(contentSection.findAll('li')).toHaveLength(2)
  })

  it('does not render content section when contents is empty object without length property', () => {
    const wrapper = mount(CardComponent, {
      props: {
        contents: {}
      },
      slots: {
        default: '<div>Card content</div>'
      }
    })

    expect(wrapper.find('.card-content').exists()).toBe(false)
  })

  it('renders footer slot when provided', () => {
    const wrapper = mount(CardComponent, {
      slots: {
        footer: '<button class="card-btn">Confirm</button>'
      }
    })

    const footerSection = wrapper.find('.card-footer')
    expect(footerSection.exists()).toBe(true)
    expect(footerSection.find('button').text()).toBe('Confirm')
  })
})
