declare module 'react-native-ico-phones-and-mobiles' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = '3g' |
      '3g' |
      '4g' |
      '4g' |
      '4g plus' |
      '4g' |
      '5g' |
      '5g' |
      'back camera' |
      'qr code' |
      'bluetooth' |
      'camera' |
      'smartphone' |
      'face recognition' |
      'face recognition' |
      'deny' |
      'face recognition' |
      'face recognition' |
      'cancel' |
      'fingerprint' |
      'forbidden' |
      'fingerprint' |
      'fingerprint' |
      'fingerprint' |
      'fullscreen' |
      'signal' |
      'smartphone' |
      'smartphone' |
      'back camera' |
      'landscape mode' |
      'landscape mode' |
      'lte' |
      'lte' |
      'qr code' |
      'bluetooth' |
      'bluetooth' |
      'bluetooth' |
      'broken smartphone' |
      'mobile calibration' |
      'mobile cloud' |
      'connect' |
      'connect' |
      'connect' |
      'connectivity' |
      'cracked smartphone' |
      'smartphone' |
      'smartphone' |
      'no smartphones' |
      'keyboard' |
      'smartphone' |
      'ring' |
      'rotate' |
      'rotate' |
      'smartphone' |
      'devices' |
      'sync' |
      'sync' |
      'transfer' |
      'transfer' |
      'transfer' |
      'transfer' |
      'vibrate' |
      'music player' |
      'no signal' |
      'low signal' |
      'eye scanner' |
      'eye scanner' |
      'denied' |
      'eye scanner' |
      'eye scanner' |
      'smartphone' |
      'smartphone' |
      'signal' |
      'smartphone' |
      'qr code' |
      'bluetooth' |
      'bluetooth' |
      'bluetooth' |
      'broken smartphone' |
      'mobile calibration' |
      'mobile cloud' |
      'connect' |
      'connect' |
      'connect' |
      'connectivity' |
      'cracked smartphone' |
      'smartphone' |
      'smartphone' |
      'no smartphones' |
      'keyboard' |
      'smartphone' |
      'ring' |
      'rotate' |
      'rotate' |
      'smartphone' |
      'devices' |
      'sync' |
      'sync' |
      'transfer' |
      'transfer' |
      'transfer' |
      'transfer' |
      'connectivity' |
      'vibrate' |
      'bluetooth' |
      'bluetooth' |
      'bluetooth' |
      'connection' |
      'connection' |
      'connection' |
      'connection' |
      'connection' |
      'connection' |
      'back camera' |
      'back camera' |
      'back camera' |
      'signal' |
      'back camera' |
      'no wifi' |
      'wifi';

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
