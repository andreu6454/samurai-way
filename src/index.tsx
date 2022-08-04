import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DialogsData = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Celvin"},
    {id: 3, name: "Kolyan"},
    {id: 4, name: "Andrey"},
    {id: 5, name: "Celvin"},
    {id: 6, name: "Kolyan"},
]
const MessageData = [
    {id: 1, message: "hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yooo"},
]
const PostsData = [
    {id: 1, message: "Hello", likesCount: 10},
    {id: 2, message: "How are you?", likesCount: 5},
    {id: 3, message: "good", likesCount: 14}
]

export type DialogsDataType = {
    id: number,
    name: string
}
export type MessageDataType = {
    id: number,
    message: string
}
export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

ReactDOM.render(

    <App MessageData={MessageData} DialogsData={DialogsData} PostsData={PostsData}/>,
  document.getElementById('root')
);