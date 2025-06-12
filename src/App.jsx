import React from 'react'
import Header from './components/header/Header'
import Layout from './components/layout/Layout'

const App = () => {
  const data = [
    {
      id:1,
      title: "Koenigsegg",
      type: "Sport",
      img: "",
      capacity: 2,
      fuel: "90l",
      price: "$99/day"
    },
    {
      id:2,
      title: "Nissan GT-R",
      type: "Sport",
      img: "",
      capacity: 2,
      fuel: "80l",
      price: "$80/day"
    },
    {
      id:3,
      title: "Rolls-Royce",
      type: "Sedan",
      img: "",
      capacity: 4,
      fuel: "70l",
      price: "$96/day"
    },
    {
      id:4,
      title: "All New Rush",
      type: "Suv",
      img: "",
      capacity: 6,
      fuel: "70l",
      price: "$72/day"
    },
    {
      id:5,
      title: "Koenigsegg",
      type: "Sport",
      img: "",
      capacity: 2,
      fuel: "90l",
      price: "$99/day"
    },
    {
      id:6,
      title: "Koenigsegg",
      type: "Sport",
      img: "",
      capacity: 2,
      fuel: "90l",
      price: "$99/day"
    },
    {
      id:7,
      title: "Koenigsegg",
      type: "Sport",
      img: "",
      capacity: 2,
      fuel: "90l",
      price: "$99/day"
    },
    {
      id:8,
      title: "Koenigsegg",
      type: "Sport",
      img: "",
      capacity: 2,
      fuel: "90l",
      price: "$99/day"
    },
  ]
  return (
    <>
    <Header/>
    <Layout/>
    </>
  )
}

export default App