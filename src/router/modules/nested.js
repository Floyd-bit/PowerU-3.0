/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1',
  name: 'Nested',
  meta: {
    title: 'Nested Routes',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: {title: 'Menu 1'},
      redirect: '/nested/menu1',
    },

    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'Menu 2' },
      redirect: '/nested/menu2',
    },
    {
      path: 'menu2',
      name: 'Menu3',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'Menu 3' },
      redirect: '/nested/menu2',
    }
  ]
}

export default nestedRouter
