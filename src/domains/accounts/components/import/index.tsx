import { Button, Text, TextInput, View } from "react-native";
import { importStyle } from "../../styles";
import { Skeleton } from "@/global/components/layouts";
import { NAVIGATION } from "@/constants/navigation";
import { Broom, Import as ImportIcon } from "@/assets/svg";
import { ButtonWithIcon } from "@/global/components/elements";
import { Colors } from "@/constants";
import { Formik } from "formik";

const Import = () => {

    return (
        <View style={importStyle.container}>
            <Skeleton
                backAction={NAVIGATION.account}
                headerLabel={"Import"}
                actionIcon={{
                    action: () => console.log('clear'),
                    icon: Broom
                }}
            >
                <Formik
                    initialValues={{ name: '', descriptor: '' }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <View style={importStyle.bodyContainer}>
                            <View style={importStyle.formContainer}>
                                <View>
                                    <View style={importStyle.absoluteContainer}>
                                        <View style={importStyle.inputHeaderContainer}>
                                            <View style={importStyle.inputHeaderTextContaiener}>
                                                <Text style={importStyle.inputHeaderText}>Name</Text>
                                            </View>
                                            <View style={importStyle.inputHeaderTextContaiener}>
                                                <Text style={importStyle.inputHeaderText}>{`${values.name.length}/20`}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TextInput
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        style={[importStyle.nameInput, importStyle.input]}
                                        maxLength={20}
                                    />
                                </View>
                                <View>
                                    <View style={importStyle.absoluteContainer}>
                                        <View style={importStyle.inputHeaderContainer}>
                                            <View style={importStyle.inputHeaderTextContaiener}>
                                                <Text style={importStyle.inputHeaderText}>Descriptor</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TextInput
                                        onChangeText={handleChange('descriptor')}
                                        value={values.descriptor}
                                        style={[importStyle.descriptorInput, importStyle.input]}
                                        multiline
                                    />
                                </View>
                            </View>
                            <View style={importStyle.formButtonContainer}>
                                <ButtonWithIcon
                                    width="70%"
                                    action={handleSubmit}
                                    Icon={ImportIcon}
                                    background={Colors.Green}
                                    size={15}
                                    tag={"Done"}
                                />
                            </View>
                            
                        </View>
                    )}
                </Formik>
            </Skeleton>
        </View>
    )
}

export default Import;