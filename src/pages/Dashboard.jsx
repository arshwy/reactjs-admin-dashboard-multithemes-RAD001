import React from 'react'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Statuscard from '../components/statuscard/Statuscard'
import ststusCards from '../assets/JsonData/status-card-data.json'

import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

const chartOptions = {
  series: [{
    name: 'Online Customers',
    data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
  }, {
    name: 'Store Customers',
    data: [40, 30, 70, 80, 40, 16, 30, 40, 20]
  }],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
}

const topCustomers = {
  head: [
    'user',
    'total orders',
    'total spending'
  ],
  body: [
    {
      "username": "john doe",
      "order": "360",
      "price": "$14,820"
    },
    {
      "username": "Kate H.",
      "order": "250",
      "price": "$22,231"
    },
    {
      "username": "johnson smith",
      "order": "131",
      "price": "$11,750"
    },
    {
      "username": "Eddie Mo.",
      "order": "217",
      "price": "$14,360"
    },
    {
      "username": "Adam Hek",
      "order": "123",
      "price": "$20,274"
    }
  ]
}

const renderCustomerHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const latestOrders = {
  head: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  body: [
      {
          id: "#OD1711",
          user: "john doe",
          date: "17 Jun 2021",
          price: "$900",
          status: "shipping"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}

const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]}
             content={item.status} 
      />
    </td>
  </tr>
)

const Dashboard = () => {

  const themeMode = useSelector(state => state.ThemeReducer.mode)
  

  return (
    <div>
        <h2 className="page-header">Dashboard</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              {
                ststusCards.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <Statuscard 
                        icon = {item.icon}
                        count={item.count}
                        title={item.title}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card full-height">
              <Chart 
                options={ themeMode === 'theme-mode-dark' ? {
                  ...chartOptions.options,
                  theme: { mode: 'dark' }
                  } : {
                    ...chartOptions.options,
                    theme: { mode: 'light' }
                  }
                }
                series={chartOptions.series}
                type='line'
                height='100%'
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
               <div className="card-head">
                <h3>famous users</h3>
              </div>
              <div className="card-body">
                <Table 
                  headData={topCustomers.head}
                  renderHead={(item, index) => renderCustomerHead(item, index)}
                  bodyData={topCustomers.body}
                  renderBody={(item, index) => renderCustomerBody(item, index)}
                />
              </div>
              <div className="card-foot">
                <Link to='/'>View All</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-head">
                <h3>latest orders</h3>
              </div>
              <div className="card-body">
                <Table 
                    headData={latestOrders.head}
                    renderHead={(item, index) => renderOrderHead(item, index)}
                    bodyData={latestOrders.body}
                    renderBody={(item, index) => renderOrderBody(item, index)}
                  />
              </div>
              <div className="card-foot">
                <Link to='/'>ViewAll</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard