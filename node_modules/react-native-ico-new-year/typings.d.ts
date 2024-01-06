declare module 'react-native-ico-new-year' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'new-years-eve' |
      'christmas-tree' |
      'bells' |
      'santa-claus' |
      'candelabra' |
      'star' |
      'music-sheet' |
      'shooting-star' |
      'snow-globe' |
      'snowflake' |
      'lantern' |
      'shopping-bag' |
      'lollipop' |
      'snowflake-1' |
      'sleigh' |
      'orange' |
      'moustache' |
      'midnight' |
      'margarita' |
      'christmas-card' |
      'fortune-cookie' |
      'mittens' |
      'bauble' |
      'christmas-day' |
      'santa-claus-1' |
      'christmas-sock' |
      'lantern-1' |
      'star-1' |
      'bird' |
      'gift' |
      'angel' |
      'christmas-card-1' |
      'mistletoe' |
      'cocktail' |
      'chimney' |
      'confetti' |
      'deer' |
      'new-year' |
      'garland' |
      'chat' |
      'window' |
      'jingle-bell' |
      'stars' |
      'champagne' |
      'list' |
      'bauble-1' |
      'candle' |
      'confetti-1' |
      'scroll' |
      'pattern';

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
