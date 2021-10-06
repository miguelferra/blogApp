import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const indexScreen = ({ navigation }) => {
  const { state, deleteBlogPosts } = useContext(Context);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      
      <FlatList
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                  <Feather
                    style={styles.icon}
                    name="trash"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        data={state}
      ></FlatList>
    </View>
  );
};

/* return {
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>
  ),
}; */

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default indexScreen;
