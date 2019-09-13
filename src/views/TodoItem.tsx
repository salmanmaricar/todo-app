import React from 'react';
import {RouteComponentProps} from "react-router-dom";

type TParams = { id: string };

function TodoItem({match}: RouteComponentProps<TParams>) {
    return (
        <div>
            <h1>TodoItem: {match.params.id} </h1>
        </div>
    );
}

export default TodoItem;
