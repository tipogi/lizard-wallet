import { Colors } from "@/constants";
import { StyleSheet, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

interface SettingsProps {
  focused: boolean
}

export function Settings(props: SettingsProps) {

  const color = props.focused ? Colors.White : Colors.Green;
  const fontSize = props.focused ? 50 : 30;
  const style = props.focused ? styles.container : styles.none;
  return (
    <View style={style}>
      <Svg
        width={fontSize}
        height={fontSize}
        viewBox="0 0 24 24"
      >
        <G
          fill="none"
          fill-rule="evenodd"
        >
          <Path
            d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
          />
          <Path
            fill={color}
            d="M10.75 2.567a2.5 2.5 0 0 1 2.332-.089l.168.089L19.544 6.2a2.5 2.5 0 0 1 1.244 1.987l.006.178v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095l-6.295 3.634a2.5 2.5 0 0 1-2.332.089l-.168-.09L4.456 17.8a2.5 2.5 0 0 1-1.244-1.987l-.006-.178V8.366a2.5 2.5 0 0 1 1.1-2.07l.15-.095l6.294-3.634Zm1.5 1.732a.5.5 0 0 0-.42-.037l-.08.037l-6.294 3.634a.5.5 0 0 0-.242.345l-.008.088v7.268a.5.5 0 0 0 .178.382l.072.05l6.294 3.635a.5.5 0 0 0 .42.037l.08-.037l6.294-3.634a.5.5 0 0 0 .243-.345l.007-.088V8.366a.5.5 0 0 0-.177-.382l-.073-.051l-6.294-3.634ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Green,
    borderRadius: 40,
    height: 80,
    width: 80,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  none: {}
})