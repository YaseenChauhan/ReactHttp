import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css'
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    state = {
        auth: true
    }
    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    boxShadow: '0 2px 2px #ccc',
                                    color: 'orange'
                                }}>Posts</NavLink></li>
                            <li><NavLink
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submitId',
                                    search: 'query-param'
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* {<Route path="/" exact render={() => <h1>Asslam</h1>}/>
                <Route path="/"  render={() => <h1>Wasslam</h1>}/>} */}

                <Switch>
                    {/* {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> :null} */}
                    {/* <Route path="/new-post" exact component={NewPost} /> */}

                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>

            </div>

        );
    }
}

export default Blog;