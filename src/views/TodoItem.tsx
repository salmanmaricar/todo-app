import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

type TParams = { id: string };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function TodoItem({match}: RouteComponentProps<TParams>) {
    return (
        <div>
            <h1>TodoItem: {match.params.id} </h1>
        </div>
    );
}

export default TodoItem;
