import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Analytics from '../pages/Analytics'
import Categories from '../pages/Categories'
import Discount from '../pages/Discount'
import Inventory from '../pages/Inventory'
import Settings from '../pages/Settings'

const Routes = () => {
  return (
    <Switch>
        <Route exact path='/' element={ <Dashboard /> }/>
        <Route path='/customers' element={ <Customers /> }/>
        <Route path='/products' element={ <Products /> }/>
        <Route path='/orders' element={ <Orders /> }/>
        <Route path='/Analytics' element={ <Analytics /> }/>
        <Route path='/categories' element={ <Categories /> }/>
        <Route path='/discount' element={ <Discount /> }/>
        <Route path='/inventory' element={ <Inventory /> }/>
        <Route path='/settings' element={ <Settings /> }/>
    </Switch>
  )
}

export default Routes