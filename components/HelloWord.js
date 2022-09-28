import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const HelloWorld = () => {
  const [helloText, setHelloText] = useState("Click the button!");

  function buttonClicked() {
    setHelloText("Hello World!");
  }

  return (
    <View>
      <Text>{helloText}</Text>
      <Button title={"Click me!"} onPress={buttonClicked}></Button>
    </View>
  );
};
