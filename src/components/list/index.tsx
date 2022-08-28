import React from 'react';
import list from './list.module.scss';

export const List = () => {
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Javaacript',
        time: '01:00:00'
    }, {
        task: 'Typescript',
        time: '03:00:00'
    }];

    return (
        <aside className={list.listaTarefas}>
            <h2>
                <ul>
                    {tasks.map((item, index) => (
                        <li key={index} className={list.item}>
                            <h3> {item.task} </h3>
                            <span> {item.time} </span>
                        </li>
                    ))}
                </ul>
            </h2>
        </aside>
    )
}

export default List;