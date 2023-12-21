import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./index";

export default function Settings(props: IconProps) {
  return (
    <View style={styles.container}>
      <Svg
        width={props.fontSize}
        height={props.fontSize}
        viewBox="0 0 24 24"
      >
        <Path
          fill={props.color}
          d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1Zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653L12 3.311ZM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})