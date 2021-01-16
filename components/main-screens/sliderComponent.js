import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";

function SliderComponent() {
  const [sliderValue, setSliderValue] = useState(0);

  //https://reactnativeforyou.com/how-to-add-a-slider-component-in-react-native/
  const handleChange = sliderValue => {
    setSliderValue(sliderValue);
  };

  return (
    // https://github.com/callstack/react-native-slider
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{Math.round(sliderValue)}</Text>
      <Slider
        type="range"
        value={sliderValue}
        onValueChange={handleChange}
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={5}
        // minimumTrackTintColor="#FFFFFF"
        // maximumTrackTintColor="#000000"
      />
    </View>
  );
}

export default SliderComponent;