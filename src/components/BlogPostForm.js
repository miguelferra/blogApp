import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const BlogPostForm = ({ onSubmit, initialValue }) => {
  const { state } = useContext(Context);
  const [title, setTitle] = useState(initialValue?.title);
  const [content, setContent] = useState(initialValue?.content);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>Enter title:</Text>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
        ></TextInput>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          value={content}
          onChangeText={(text) => setContent(text)}
          style={styles.input}
        ></TextInput>
      </View>

      <Button
        onPress={() => {
            onSubmit(title, content)
        }}
        style={styles.button}
        title="Save blog post"
      ></Button>
    </View>
  );
};

BlogPostForm.defaultProps = {
    initialValue:{
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginHorizontal: 20,
        marginBottom: 15,
        padding: 5,
      },
      label: {
        fontSize: 20,
        marginBottom: 5,
        marginHorizontal: 20,
      },
      container: {
        marginVertical: 20,
      },
      button: {
        marginTop: 10,
        paddingHorizontal: 199,
      },
});

export default BlogPostForm;