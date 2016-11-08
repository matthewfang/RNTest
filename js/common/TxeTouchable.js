/**
 * Created by MatthewFang-pc on 2016/11/7.
 */
import React from 'react';
import {
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';

function TxeTouchableIOS(props: Object): ReactElement {
    return (
        <TouchableHighlight
            accessibilityTraits="button"
            underlayColor="#3C5EAE"
            {...props}
        />
    );
}

export const TxeTouchable = Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TxeTouchableIOS;