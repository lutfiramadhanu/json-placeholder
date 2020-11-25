import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Albums extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/albums';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <nav>
                    <div class="nav-wrapper  deep-green">
                    <a href="#" class="brand-logo right">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="/">Posts</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li><a href="/Albums">Albums</a></li>
                        <li><a href="/Photos">Photos</a></li>
                        <li><a href="/Todos">Todos</a></li>
                        <li><a href="/Users">Users</a></li>
                    </ul>
                    </div>
                </nav>
                <h1 align="center">data json Albums</h1>
                    <table border="1">
                        <tr class="card-panel pink"> 
                        <td>userId</td>
                        <td>id</td>
                        <td>title</td>
                        </tr>
                        {data.map(todo =>
                        <tr hey={todo.userId}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                        </tr>
                        )}
                    </table>
            </div>
        )
    }
}
    
export default Albums;