/**
 * 跨平台样式选择器
 * @matthewfang
 */
import {StyleSheets, PlatformStyles} from 'react-native';

export function create(styles: Object): {[name: string]: number} {
  const platformStyles = {};
  Object.keys(styles).forEach((name)=> {
    let {android, ios, ...style} = {...styles[name]};
    if (ios && Platform.os === 'ios' ) {
      style = {...style, ...ios};
    }

    if (android && Platform.os === 'android') {
      style = {...style, ...android};
    }

     platformStyles[name] = style;
 });
  return StyleSheets.create(platformStyles);
}
