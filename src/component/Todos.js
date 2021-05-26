import React from 'react'
import {
    ListGroup,
    ListGroupItem
} from "reactstrap"

import {MdDelete} from "react-icons/md"


export default function Todos({todos, markComplete}) {
    return (
        <ListGroup className="mt-5 mb-2 items">
            {
                todos.map(todo => (
                    <ListGroupItem key={todo.id}>
                          {todo.todostring}
                        <span onClick={() => markComplete(todo.id)}><MdDelete/></span>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
        
    )
}
