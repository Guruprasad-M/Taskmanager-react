import React from 'react'

const Footer = ({length}) => {
    const year= new Date();
  return (
    
    <footer> {length} List {length === 1? "item": "items"}
       <h6 color='blue'>Made by Guruprasad  &copy; {year.getFullYear()}</h6></footer>
  )
}

export default Footer