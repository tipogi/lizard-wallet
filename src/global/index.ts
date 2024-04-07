import { APP_HEADER_FONT, APP_HEADER_FONT_BOLD, Colors } from '@/constants';
import { APP_FONT, APP_FONT_BOLD, APP_FONT_EXTRA_BOLD, APP_FONT_ITALIC, APP_FONT_REGULAR, APP_FONT_SEMIBOLD, H1, H1_S, H2, H3, H3_S, H4, H4_S, H5, H5_S } from '@/constants/font';
import { StyleSheet } from 'react-native';

// Elements related stylesheets
export {modalStyle} from './styles/elements/modalStyles';
export {buttonStyle, buttonColors, buttonDimensions } from './styles/elements/buttonStyles';
export {textColors} from './styles/elements/textStyle';

// Layout related stylesheets
export { generalStyle } from './styles/layouts/headers';
export { skeletonStyle } from './styles/layouts/skeleton';

export const fontStyle = StyleSheet.create({
    header: {
        fontFamily: APP_HEADER_FONT
    },
    headerBold: {
        fontFamily: APP_HEADER_FONT_BOLD
    },
    main: {
        fontFamily: APP_FONT,
    },
    italic: {
        fontFamily: APP_FONT_ITALIC,
    },
    regular: {
        fontFamily: APP_FONT_REGULAR,
    },
    semibold: {
        fontFamily: APP_FONT_SEMIBOLD,
    },
    bold: {
        fontFamily: APP_FONT_BOLD,
    },
    extrabold: {
        fontFamily: APP_FONT_EXTRA_BOLD,
    },
    h1: {
        fontSize: H1
    },
    h1_s: {
        fontSize: H1_S
    },
    h2: {
        fontSize: H2
    },
    h3: {
        fontSize: H3
    },
    h3_s: {
        fontSize: H3_S
    },
    h4: {
        fontSize: H4
    },
    h4_s: {
        fontSize: H4_S
    },
    h5: {
        fontSize: H5
    },
    h5_s: {
        fontSize: H5_S
    }
});

export const genericGlobalStyle = (color: Colors) => StyleSheet.create({
    fontColor: {
        color
    }
});

export const iconSizes = {
    SMALL: 14,
    MEDIUM: 20,
    LARGE: 24,
    XLARGE: 30
};