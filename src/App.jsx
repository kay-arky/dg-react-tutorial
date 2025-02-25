import Header from "./Header.jsx"
import Content from "./Content.jsx"
import Footer from "./Footer.jsx"
import { useState } from "react"
const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ])
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    )
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  }

  return (
    <div className="App">
      <Header title="Groceries list" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
