import React, { useContext } from "react";
import {StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm"

const createScreen = ({ navigation }) => {
  
  const { addBlogPosts } = useContext(Context);

  return(
    <BlogPostForm onSubmit={(title,content) => {
      addBlogPosts(title, content, () => navigation.navigate('Blogs'))
    }}></BlogPostForm>
  )
};

const styles = StyleSheet.create({});

export default createScreen;
