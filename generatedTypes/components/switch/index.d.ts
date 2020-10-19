import React from 'react';
export declare type SwitchProps = {
    /**
     * The value of the switch. If true the switch will be turned on. Default value is false
     */
    value?: boolean;
    /**
     * Invoked with the new value when the value changes
     */
    onValueChange?: () => void;
    /**
     * Whether the switch should be disabled
     */
    disabled?: boolean;
    /**
     * The Switch width
     */
    width?: number;
    /**
     * The Switch height
     */
    height?: number;
    /**
     * The Switch background color when it's turned on
     */
    onColor?: string;
    /**
     * The Switch background color when it's turned off
     */
    offColor?: string;
    /**
     * The Switch background color when it's disabled
     */
    disabledColor?: string;
    /**
     * The Switch's thumb color
     */
    thumbColor?: string;
    /**
     * The Switch's thumb size (width & height)
     */
    thumbSize?: number;
    /**
     * The Switch's thumb style
     */
    thumbStyle?: object | number | [];
    style?: any;
};
declare const _default: React.ComponentClass<SwitchProps & {
    useCustomTheme?: boolean | undefined;
}, any>;
export default _default;
