declare module 'react-native-ico-christmas' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'chocolate-1' |
      'christmas-card-1' |
      'christmas-card' |
      'list-1' |
      'list' |
      'zambomba' |
      'tambourine' |
      'chocolate' |
      'bauble-1' |
      'star-2' |
      'snow-globe' |
      'candy-cane' |
      'candle' |
      'christmas-tree-1' |
      'bauble' |
      'turron' |
      'polvoron' |
      'cookie-1' |
      'poinsettia-1' |
      'reindeer' |
      'bell-1' |
      'sleigh' |
      'cracker' |
      'tinsel' |
      'bell' |
      'king-cake' |
      'pudding' |
      'tag' |
      'north-pole' |
      'wine' |
      'champagne' |
      'poinsettia' |
      'crown' |
      'marzipan' |
      'sheet-music' |
      'market' |
      'roast-chicken' |
      'shopping-bag' |
      'star-1' |
      'drum' |
      'star' |
      'window' |
      'flower' |
      'church' |
      'grinch' |
      'bonfire' |
      'pie' |
      'snowy' |
      'cookie' |
      'peppermint' |
      'ghost' |
      'carol' |
      'branch' |
      'winter-hat' |
      'calendar' |
      'christmas-day' |
      'nutcracker' |
      'chimney' |
      'pomegranate' |
      'ice-skates' |
      'chat' |
      'robin' |
      'scarf' |
      'mittens' |
      'spices' |
      'mistletoe-1' |
      'stamp' |
      'polar-bear' |
      'gift-bag' |
      'movie' |
      'angel' |
      'thermos' |
      'kid' |
      'gift' |
      'mistletoe' |
      'car' |
      'gingerbread-house' |
      'gingerbread-man' |
      'baking' |
      'like' |
      'cider' |
      'jar' |
      'sweater' |
      'snowman' |
      'mailbox' |
      'snowflake' |
      'lollipop' |
      'book' |
      'vinyl' |
      'christmas-tree' |
      'matches' |
      'santa-claus-1' |
      'lights-1' |
      'lights' |
      'christmas-sock' |
      'fireplace' |
      'wreath' |
      'elf' |
      'mrs-claus' |
      'santa-claus';

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
