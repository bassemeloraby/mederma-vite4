import React from 'react'
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { drugs } = useLoaderData();
const page = 1
const pageSize = 100
const drugsCount = (drugs.length)
const pageCount = drugs.length / pageSize
console.log('pageCount',pageCount)
console.log(pageSize)
console.log(drugsCount)

  return (
    <div>PaginationContainer</div>
  )
}

export default PaginationContainer