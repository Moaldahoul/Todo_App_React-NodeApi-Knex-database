import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleTodoList = ({ title, isDone, onEdit, id, history, onDelete }) =>{
    return(
        <div className={`card ${isDone? 'bg-success' : 'bg-danger'} text-white `}  >
            <div className = "Card-block">
                <div className="card-title">
                    <h4> {title} </h4>
                </div>
                <div className="card-text">
                    {isDone? 'This todo has been Completed': 'This todo need to be finished' }
                </div>
                <div className= "d-flex justify-content-between align-items-end mt-5">
                    <button className="btn btn-link text-white" onClick={() => {
                            axios.delete(`/api/todo/${id}`).then(() => {
                                history.push('/');
                            });
                        }}> Delete
                    </button>
                    
                    <button className="btn btn-link text-white" onClick={onEdit} >Edit</button>
                </div>
            </div>
        </div>
    )
};

export default withRouter(SingleTodoList);