import { APP_FONT, APP_FONT_BOLD } from '@/constants';
import { StyleSheet } from 'react-native';

// Elements related stylesheets
export {modalStyle} from './elements/modalStyles';
export {buttonStyle, buttonColors} from './elements/buttonStyles';

// Layout related stylesheets
export { generalStyle } from './layouts/headers';
export { skeletonStyle } from './layouts/skeleton';

export const globalStyle = StyleSheet.create({
    fontFamily: {
        fontFamily: APP_FONT
    },
    fontFamilyBold: {
        fontFamily: APP_FONT_BOLD
    }
})