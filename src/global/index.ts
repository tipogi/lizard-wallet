import { APP_FONT, APP_FONT_BOLD, Colors } from '@/constants';
import { H3 } from '@/constants/font';
import { StyleSheet } from 'react-native';

// Elements related stylesheets
export {modalStyle} from './styles/elements/modalStyles';
export {buttonStyle, buttonColors} from './styles/elements/buttonStyles';
export {textColors} from './styles/elements/textStyle';

// Layout related stylesheets
export { generalStyle } from './styles/layouts/headers';
export { skeletonStyle } from './styles/layouts/skeleton';

export const globalStyle = StyleSheet.create({
    fontFamily: {
        fontFamily: APP_FONT
    },
    fontFamilyBold: {
        fontFamily: APP_FONT_BOLD
    },
    h3: {
        fontSize: H3
    }
});

export const genericGlobalStyle = (color: Colors) => StyleSheet.create({
    fontColor: {
        color
    }
})