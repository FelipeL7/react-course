import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    // axios.get to getting the data
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    // axios.post to create data
    const { data: post } = await axios.post(apiEndpoint, obj);

    const posts = [post, ...this.state.posts];

    // console.log("Add", post);
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";

    // axios.put method uses the entire object as second argument
    await axios.put(`${apiEndpoint}/${post.id}`, post);

    // axios.patch method send only the propoerties that should be updated as second argument
    // axios.patch(`${apiEndpoint}/${post.id}`, { title: post.title});

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);

    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = (post) => {
    console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
