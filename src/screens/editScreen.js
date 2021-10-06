import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const editScreen = ({ navigation, route }) => {
  const { state, editBlogPosts } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <BlogPostForm
      initialValue={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPosts(route.params.id, title, content, () => navigation.pop())
      }}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default editScreen;
