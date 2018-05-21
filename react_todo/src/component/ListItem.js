import React from "react";

const ListItem = ({title, isDone}) => {
    return(
        <li className="list-group-item">
            {title} {isDone ? "Done": "Not Done"}
        </li>
    )
}

export default ListItem;