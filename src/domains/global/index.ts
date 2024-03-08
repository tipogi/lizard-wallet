import { APP_FONT, APP_FONT_BOLD } from '@/constants';
import { StyleSheet } from 'react-native';

// Elements related stylesheets
export {modalStyle} from './styles/elements/modalStyles';
export {buttonStyle, buttonColors} from './styles/elements/buttonStyles';

// Layout related stylesheets
export { generalStyle } from './styles/layouts/headers';
export { skeletonStyle } from './styles/layouts/skeleton';

export const globalStyle = StyleSheet.create({
    fontFamily: {
        fontFamily: APP_FONT
    },
    fontFamilyBold: {
        fontFamily: APP_FONT_BOLD
    }
})