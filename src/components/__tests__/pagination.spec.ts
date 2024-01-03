import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Pagination from '../common/pagination.vue'

describe('Pagination', () => {
  it('renders properly', () => {
    // Check if pagination component renders properly with navigation buttons
    const wrapper = mount(Pagination, { props: { total: 2080, page: 20 } })
    expect(wrapper.text()).toContain('21 of 104')
    expect(wrapper.findAll('button').length).toBe(4)
  })
})
