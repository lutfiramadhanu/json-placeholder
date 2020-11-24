import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Users extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/Comments';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <center>
                <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Post</Mui.Button>
                        <Mui.Button href="/Comments">Comments</Mui.Button>
                        <Mui.Button href="/Albums">Albums</Mui.Button>
                        <Mui.Button href="/Photos">Photos</Mui.Button>
                        <Mui.Button href="/Todos">Todos</Mui.Button>
                        <Mui.Button href="/Users">Users</Mui.Button>
                    </Mui.ButtonGroup>
                </center>
                <h1 align="center">data json Comments</h1>
                    <table border="1">
                        <tr>
                        <td>postId</td>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>body</td>
                        </tr>
                        {data.map(todo =>
                        <tr hey={todo.postId}>
                            <td>{todo.id}</td>
                            <td>{todo.email}</td>
                            <td>{todo.body}</td>
                        </tr>
                        )}
                    </table>
            </div>
        )
    }
}
    
export default Users;