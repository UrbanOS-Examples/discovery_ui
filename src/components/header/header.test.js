import { shallow } from 'enzyme'
import Header from './header'

describe('header', () => {
  const scrollThreshold = 63
  const nearlyTopOfPage = 20

  test('starts unpinned', () => {
    const subject = shallow(<Header />)
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toEqual(false);
  })

  test('does not pin on scroll within header zone', () => {
    const subject = shallow(<Header />)
    window.scrollY = scrollThreshold - 1
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toEqual(false);
  })

  test('pins on scroll past header zone', () => {
    const subject = shallow(<Header />)
    window.scrollY = scrollThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toEqual(true);
  })

  test('unpins on scroll back up', () => {
    const subject = shallow(<Header />)
    window.scrollY = scrollThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toEqual(true);

    window.scrollY = nearlyTopOfPage
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.nav-wrapper').hasClass('pinned')).toEqual(false);
  })

  test('image animation class is applied as the page scrolls', () => {
    const subject = shallow(<Header />)
    expect(subject.find('.logo').hasClass('rescale')).toEqual(true);

    window.scrollY = scrollThreshold
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.logo').hasClass('scale-down')).toEqual(true);

    window.scrollY = nearlyTopOfPage
    window.dispatchEvent(new Event('scroll'))
    expect(subject.find('.logo').hasClass('rescale')).toEqual(true);
  })

})
