declare module 'react-native-ico-technology-logos' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'hp' |
      'acer' |
      'samsung' |
      't-mobile' |
      'oppo' |
      'asus' |
      'one-plus' |
      'gopro' |
      'casio' |
      'nokia' |
      'zeiss' |
      'huawei' |
      'nikon' |
      'beats' |
      'jvc' |
      'gigabyte' |
      'seagate' |
      'logitech' |
      'nvidia' |
      'cisco' |
      'leica' |
      'brother' |
      'ibm' |
      'dell' |
      'htc' |
      'att' |
      'compaq' |
      'lg' |
      'sandisk' |
      'xiaomi' |
      'canon' |
      'xerox' |
      'lenovo' |
      'zte' |
      'vaio' |
      'sharp' |
      'sony' |
      'packard-bell' |
      'vivo' |
      'android' |
      'amd' |
      'hitachi' |
      'motorola' |
      'epson' |
      'verizon' |
      'apple' |
      'philips' |
      'windows' |
      'sap' |
      'intel';

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
