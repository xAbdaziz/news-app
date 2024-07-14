import { useState } from "react"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"

export default function App() {
  const [searchValue, setSearchValue] = useState("")
  return (
      <div className="container mx-auto">
        <SearchForm setSearchValue={setSearchValue} />
        <SearchResults searchValue={searchValue} />
      </div>
  )
}
