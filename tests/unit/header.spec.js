/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-05 13:30:56
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-05 16:18:47
*/

import { shallowMount,mount } from '@vue/test-utils';

import Header from '@/components/header/index.vue';

describe('header.vue', () => {
  // 测试openapp 的链接是否正确
  it('show correct url in open app btn', () => {
    const url = 'https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F';
    const wrapper = mount(Header);
    expect(wrapper.find('.openapp').attributes('href')).toMatch(url);
  });

  // 测试能否出现搜索组件
  it('click search btn goto search page',()=>{
        const wrapper = mount(Header);
        const gotoSearchWrapper = wrapper.find('.search');
        gotoSearchWrapper.trigger('click');
        expect(wrapper.classes('is-active')).toBe(true);
        const closeNav = wrapper.find('.close-nav');
        closeNav.trigger('click');
        expect(wrapper.classes('is-active')).toBe(false);
   });
   
   
});
