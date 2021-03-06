import React from "react";
// import { render } from "react-dom"
import { fetchMainPosts } from "../utils/api";
import { BoxLoading } from "react-loadingg";
import { ThemeProvider } from "../context/theme.js";
import Post from "./Post.js";

export default class NewsBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      error: null,
      loading: true,
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.type !== prevProps.type) {
      this.handleFetch();
    }
  }
  handleFetch() {
    this.setState({
      posts: null,
      error: null,
      loading: true,
    });

    fetchMainPosts(this.props.type)
      .then((posts) =>
        this.setState(
          {
            posts: posts,
            loading: false,
            error: null,
          },
          () => console.log(this.state.posts)
        )
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          loading: false,
        })
      );

    // console.log(this.state.posts)
  }
  //mapping promises array value
  render() {
    const { posts, loading, error } = this.state;

    if (loading === true) {
      return <BoxLoading color="rgb(187, 46, 31)" />;
    }

    return (
      <Post posts={posts} />
    )
  }
}
