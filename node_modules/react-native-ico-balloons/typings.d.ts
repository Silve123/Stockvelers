declare module 'react-native-ico-balloons' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'Groups' |
      'Quiz' |
      'Words' |
      'speech-bubble-1' |
      'speech-bubble-10' |
      'speech-bubble-11' |
      'speech-bubble-12' |
      'speech-bubble-13' |
      'speech-bubble-14' |
      'speech-bubble-15' |
      'speech-bubble-16' |
      'speech-bubble-17' |
      'speech-bubble-18' |
      'speech-bubble-19' |
      'speech-bubble-2' |
      'speech-bubble-20' |
      'speech-bubble-21' |
      'speech-bubble-22' |
      'speech-bubble-3' |
      'speech-bubble-4' |
      'speech-bubble-5' |
      'speech-bubble-6' |
      'speech-bubble-7' |
      'speech-bubble-8' |
      'speech-bubble-9' |
      'speech-bubble';

    type backgroundType = 'circle' | 'rect' | 'button';

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
