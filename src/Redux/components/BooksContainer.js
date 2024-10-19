import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBooks } from '../redux/books/booksActions'

export default function BooksContainer() {
    const NumOfBooks = useSelector(state => state.books.numOfBooks)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Books - {NumOfBooks}</h2>
            <button onClick={() => dispatch(buyBooks())}>Buy Books</button>
        </div>
    )
}
