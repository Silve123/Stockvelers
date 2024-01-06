declare module 'react-native-ico-ui-interface' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'monitor' |
      'smile-1' |
      'diamond' |
      'bar-chart' |
      'wifi' |
      'key' |
      'equalizer' |
      'credit-card' |
      'share' |
      'loading' |
      'instagram' |
      'link' |
      'broken-link' |
      'smile' |
      'crop' |
      'sad' |
      'cursor' |
      'remove-user' |
      'add-user' |
      'pause' |
      'stop' |
      'play' |
      'move' |
      'video' |
      'rewind' |
      'cloud-computing-1' |
      'cloud-computing' |
      'user-1' |
      'star' |
      'facebook' |
      'cloud' |
      'briefcase' |
      'fast-forward' |
      'cancel' |
      'shield' |
      'calculator' |
      'photo-camera' |
      'cut-1' |
      'shuffle' |
      'compass' |
      'folder' |
      'minus' |
      'plus' |
      'file' |
      'align-right' |
      'expand' |
      'earth-grid' |
      'justify' |
      'copy' |
      'tag' |
      'minimize' |
      'switch-1' |
      'heart' |
      'clip' |
      'cube' |
      'information' |
      'eye' |
      'hide' |
      'log-out' |
      'align-left' |
      'puzzle' |
      'switch' |
      'picture' |
      'pin-1' |
      'right-arrow-1' |
      'refresh' |
      'filter' |
      'pencil' |
      'log-in' |
      'reply-all' |
      'reply' |
      'silence' |
      'settings' |
      'email-2' |
      'left-arrow-2' |
      'email-1' |
      'menu-1' |
      'left-arrow-1' |
      'right-arrow' |
      'down-arrow-2' |
      'up-arrow-2' |
      'alarm-1' |
      'chevron' |
      'firefox' |
      'disabled' |
      'qr-code' |
      'cut' |
      'tools' |
      'piggy-bank' |
      'binoculars' |
      'shopping-cart' |
      'money' |
      'down-arrow-1' |
      'thermometer' |
      'umbrella' |
      'dashboard' |
      'pin' |
      'megaphone' |
      'youtube' |
      'wind' |
      'safari' |
      'chrome' |
      'headphones' |
      'down-arrow' |
      'twitter' |
      'target' |
      'leaf' |
      'highlighter' |
      'smartphone' |
      'screenshot' |
      'power-button' |
      'question' |
      'push-pin' |
      'flag' |
      'left-arrow' |
      'moon' |
      'video-camera' |
      'music' |
      'printer' |
      'diskette' |
      'paste' |
      'mute-1' |
      'paint-bucket' |
      'clicker' |
      'dislike' |
      'up-arrow-1' |
      'like' |
      'straight' |
      'joke' |
      'surprise' |
      'scale' |
      'trash-1' |
      'trash' |
      'phone-call-2' |
      'phone-call-1' |
      'phone-call' |
      'eraser' |
      'thunderbolt' |
      'snowflake' |
      'sun' |
      'home' |
      'microphone' |
      'idea' |
      'layout' |
      'upload' |
      'download' |
      'medal' |
      'open-lock' |
      'diagram' |
      'pie-chart' |
      'check' |
      'followers' |
      'user' |
      'bookmark' |
      'usb' |
      'mute' |
      'volume' |
      'bluetooth' |
      'email' |
      'chat' |
      'alarm' |
      'edit' |
      'calendar' |
      'up-arrow' |
      'menu' |
      'hourglass' |
      'wall-clock' |
      'padlock';

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
