import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';
import ModalExample from '../../components/Modal/Modal';

import Post from '../../components/Post/Post';
import Aux from '../../hoc/Aux';

import './Blog.css';
import NavBar from '../../components/NavBar/Navbar';
import FooterPage from '../../components/Footers/FooterPage';

class Blog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            posts: [],
            isOneTime: false,
            variant: 'primary'
            
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.getFetch();
    }

    componentDidUpdate(){
        if(this.state.isOneTime){
            this.setState(state => ({
                isOneTime: false
              }));
            console.log(this.state.isOneTime);
            this.getFetch();

        }
    }

    handleClick() {

        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
          isOneTime: true
        }));
    }

    getFetch(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if(this.state.isToggleOn)
            {
                const posts = response.data.slice(0, 3);
                const updatedPosts = posts.map(post => {
                    return{
                        ...post,
                    }
                });
            this.setState({posts: updatedPosts, variant: 'primary'});
            }
            else
            {
              this.setState({posts: response.data, variant: 'secondary'});
            }
            
        } );
    }
    
    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} userId={post.userId}/>
        });
    

        return (
            <Aux>
                <div>
                    <NavBar />
                </div>
                <div className="Posts">
                    {posts}
                </div>
                <div className="Posts">
                    <Button variant={this.state.variant} onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'Load More Data' : 'Load Less Data'}
                    </Button>
                </div>
                <div style={{textAlign:"center", marginTop:"10px"}}>                 
                    <ModalExample />               
                </div>
                <div>
                    <FooterPage />
                </div>
            </Aux>
        );
    }
}

export default Blog;