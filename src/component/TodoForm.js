import React, { useState } from 'react'
import {
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    Form,
    FormGroup,
    Container
}from "reactstrap";
import {v4} from "uuid"    

export default function TodoForm({addTodos}) {

    const [todostring, setTodostring] = useState();
    
    const handleSubmit = (e) => {

        e.preventDefault();
    
        if (todostring === "")
        {
            return alert("Please enter a todo to add")
        }

        const todo = {
            todostring,
            id: v4()
        }

        addTodos(todo)

        setTodostring(""); 

    }

    return (
        <Form  onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Next todo"
                        value={todostring}
                        onChange={e => (setTodostring(e.target.value))}
                    />
                    <InputGroupAddon addonType="append">
                        <Button
                            color="primary"
                        >Add Todo   </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}
