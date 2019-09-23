import { shallow } from 'enzyme'
import Header from './header'

describe('Header scrollThreshold={scrollThreshold}', () => {
  const scrollThreshold = 60

  const aboveThreshold = scrollThreshold - 1
  const belowThreshold = scrollThreshold + 1

  test('starts unpinned', () => {
    const subject = shallow(<Header scrollThreshold={scrollThreshold} />)
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toBe(false);
  })

  test('does not pin on scroll within Header scrollThreshold={scrollThreshold} zone', () => {
    const subject = shallow(<Header scrollThreshold={scrollThreshold} />)
    window.scrollY = aboveThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toBe(false);
  })

  test('pins on scroll past Header scrollThreshold={scrollThreshold} zone', () => {
    const subject = shallow(<Header scrollThreshold={scrollThreshold} />)
    window.scrollY = belowThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toBe(true);
  })

  test('unpins on scroll back up', () => {
    const subject = shallow(<Header scrollThreshold={scrollThreshold} />)
    window.scrollY = belowThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toBe(true);

    window.scrollY = aboveThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toBe(false);
  })

  test('image animation class is applied as the page scrolls', () => {
    const subject = shallow(<Header scrollThreshold={scrollThreshold} />)
    expect(subject.find('.logo').hasClass('rescale')).toBe(true);

    window.scrollY = belowThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.logo').hasClass('scale-down')).toBe(true);

    window.scrollY = aboveThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.logo').hasClass('rescale')).toBe(true);
  })

})
