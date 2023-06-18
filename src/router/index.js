import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/coffee/Product'
import CoffeeDetail from '@/components/coffee/CoffeeDetail'
import Service from '@/components/Service'
import Board from '@/components/board/Board'
import BoardDetail from '@/components/board/BoardDetail'
import BoardCreate from '@/components/board/BoardCreate'
import Weather from '@/components/Weather'
import TodoList from '@/components/todo/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/boardDetail/:boardId',
      name: 'BoardDetail',
      component: BoardDetail
    },
    {
      path: '/boardCreate/:boardId',
      name: 'BoardCreate',
      component: BoardCreate
    },
    {
      path: '/coffeeDetail/:coffeeId',
      name: 'CoffeeDetail',
      component: CoffeeDetail
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
