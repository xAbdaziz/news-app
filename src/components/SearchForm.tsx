import { useState } from "react";

export default function SearchForm({ setSearchValue }: { setSearchValue: React.Dispatch<React.SetStateAction<string>> }) {
  const [inputValue, setInputValue] = useState('');
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSearchValue(inputValue)
  }

  return (
    <form className="flex justify-center py-4" onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        className="border border-gray-400 focus:outline-blue-500 rounded p-2 w-full"
        placeholder="Search"
        onChange={e => setInputValue(e.target.value)}
      />
      <div className="pe-5"></div>
      <button className="bg-blue-500 text-white rounded-sm px-7">
        Search
      </button>
    </form>
  )
}