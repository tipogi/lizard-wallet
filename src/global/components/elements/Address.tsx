import { Colors } from "@/constants";
import { addressToChunks } from "@/data/convertions";
import { genericGlobalStyle, globalStyle } from "@/global";
import { Text } from "react-native";

interface IAddressProps {
    value: string
}

const CHUNK_LENGTH = 4;

export const Address = ({ value: address }: IAddressProps) => {

    const chunks = addressToChunks(address, CHUNK_LENGTH);

    if (chunks !== null) {
        return chunks?.map((chunk, index) => {
            const color = index % 2 === 0 ? Colors.SecondaryBackground : Colors.White;
            return (
                <Text
                    key={`address-chunk-${index}`}
                    style={[genericGlobalStyle(color).fontColor, globalStyle.fontFamily, globalStyle.h3]}
                >{chunk}</Text>
            );
        });
    }
}