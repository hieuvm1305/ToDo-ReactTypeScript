import React from 'react'
interface Props {
  handleSearch: Function,
}

function SearchTodo({handleSearch} : Props) {
  const handleChange = () => {
    handleSearch({name: "1111",description: "aaaa"});
  }
  return (
    <div>SearchTodo
      <button onClick={handleChange}></button>
    </div>
  )
}

export default SearchTodo