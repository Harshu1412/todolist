import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { PixelRatio } from 'react-native';

//Guideline sizes are based on standard figma mobile dimensions
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 815;

const scale = size =>  Math.round(width / guidelineBaseWidth * size);
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};