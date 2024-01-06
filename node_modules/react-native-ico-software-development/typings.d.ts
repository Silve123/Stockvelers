declare module 'react-native-ico-software-development' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'nginx' |
      'raspberry-pi' |
      'java' |
      'docker' |
      'python' |
      'react' |
      'haskell' |
      'lisp' |
      'common-lisp' |
      'github' |
      'scratch' |
      'postscript' |
      'visual-basic' |
      'delphi' |
      'ruby' |
      'c-1' |
      'composer' |
      'c' |
      'go-lang' |
      'gnu-bash' |
      'mysql' |
      'swiftify' |
      'scala' |
      'swift' |
      'typescript' |
      'sass' |
      'php' |
      'webhook' |
      'javascript' |
      'html-5' |
      'css' |
      'nodejs';

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
