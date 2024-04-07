import { Text, View } from "react-native";
import { settingStyle } from "../../styles";
import { settingListContent } from "@/data/entities/settings";
import Parameter from "./Parameter";
import { EN } from "@/constants/translations";
import { fontStyle } from "@/global";

const SettingsComponent = () => {
    return (
        <View style={settingStyle.container}>
            <View style={settingStyle.header}>
                <Text style={[ fontStyle.bold, fontStyle.h2, settingStyle.headerText ]}>{EN.settings.headline}</Text>
            </View>
            <View style={settingStyle.main}>
                { settingListContent.map(({ icon, text, fontSize, color }, index) => { 
                    return (
                        <Parameter
                            key={`setting_param_${index}`}
                            icon={icon}
                            text={text}
                            fontSize={fontSize}
                            color={color}
                        />
                    );
                })}
            </View>
        </View>
    )
}

export default SettingsComponent;