declare module 'react-native-ico-basic' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'achievement' |
      'flag' |
      'add' |
      'contacs' |
      'aim' |
      'clock' |
      'anchor' |
      'tick' |
      'archive' |
      'atm-card' |
      'attach' |
      'backwards' |
      'badge' |
      'bag' |
      'ban' |
      'low-battery' |
      'bell' |
      'binocular' |
      'bluetooth' |
      'board' |
      'notebook' |
      'bookmark' |
      'book' |
      'box' |
      'briefcase' |
      'brush' |
      'identification' |
      'bar' |
      'calendar' |
      'telephone' |
      'call' |
      'cancel' |
      'cart' |
      'center-align' |
      'center-align-1' |
      'full-battery' |
      'tick-1' |
      'writing' |
      'writing-1' |
      'chemistry' |
      'chemistry-1' |
      'tubes' |
      'sand-clock' |
      'code' |
      'code-1' |
      'gear' |
      'compass' |
      'compress' |
      'monitor' |
      'compress-1' |
      'contact-book' |
      'cpu' |
      'crop' |
      'headphones' |
      'curriculum' |
      'pendrive' |
      'calendar-1' |
      'calendar-2' |
      'anchor-point' |
      'smartphone' |
      'diamond' |
      'diary' |
      'syringe' |
      'stethoscope' |
      'approved' |
      'archives' |
      'down-arrow' |
      'down-arrow-1' |
      'drink' |
      'writing-2' |
      'writing-3' |
      'writing-4' |
      'edit' |
      'pen' |
      'pen-1' |
      'calendar-3' |
      'calendar-4' |
      'calendar-5' |
      'calendar-6' |
      'event' |
      'event-1' |
      'tube' |
      'eye' |
      'backward' |
      'forward' |
      'paper' |
      'flag-1' |
      'flag-2' |
      'thunder' |
      'flask' |
      'flask-1' |
      'diagram' |
      'folder' |
      'folder-1' |
      'cutlery' |
      'forward-1' |
      'full-battery-1' |
      'present' |
      'present-1' |
      'squares' |
      'gym' |
      'headphones-1' |
      'blind' |
      'identification-1' |
      'name' |
      'postal' |
      'image' |
      'image-1' |
      'in' |
      'inbox' |
      'router' |
      'layers' |
      'left-alignment' |
      'left-arrow' |
      'lamp' |
      'placeholder' |
      'placeholder-1' |
      'in-1' |
      'out' |
      'wand' |
      'magnet' |
      'letter' |
      'measurement' |
      'menu' |
      'message' |
      'microphone' |
      'minimize' |
      'mobile' |
      'monitor-1' |
      'more' |
      'note' |
      'notepad' |
      'note-1' |
      'slider' |
      'slider-1' |
      'organization' |
      'log-out' |
      'package' |
      'page' |
      'pages' |
      'pause' |
      'writing-5' |
      'physics' |
      'pin' |
      'placeholder-2' |
      'play' |
      'presentation' |
      'profile' |
      'profile-1' |
      'book-1' |
      'recycle' |
      'recycle-1' |
      'recycle-2' |
      'refresh' |
      'resume' |
      'ribbon' |
      'right-alignment' |
      'right' |
      'roller' |
      'router-1' |
      'ruler' |
      'sand-clock-1' |
      'monitor-2' |
      'search' |
      'rulers' |
      'set-square' |
      'gear-1' |
      'share' |
      'shield' |
      'shopping-bag' |
      'shopping-cart' |
      'shopping-cart-1' |
      'wristwatch' |
      'star' |
      'street-light' |
      'syringe-1' |
      'tablet' |
      'tag' |
      'test-tube' |
      'document' |
      'ticket' |
      'tie' |
      'chronometer' |
      'sand-clock-2' |
      'tissue-roll' |
      'top-alignment' |
      'torch' |
      'recycle-3' |
      'recycle-4' |
      'trash' |
      'trolley' |
      'up-arrow' |
      'upload' |
      'upload-1' |
      'upload-2' |
      'usb-cable' |
      'usb' |
      'add-user' |
      'user' |
      'user-1' |
      'user-2' |
      'delete-user' |
      'user-3' |
      'user-4' |
      'user-5' |
      'user-6' |
      'user-7' |
      'user-8' |
      'user-9' |
      'contact-information' |
      'user-10' |
      'user-11' |
      'user-12' |
      'block-user' |
      'user-13' |
      'user-14' |
      'user-15' |
      'user-16' |
      'user-17' |
      'users' |
      'vector' |
      'verified' |
      'video-camera' |
      'video' |
      'eye-1' |
      'mute' |
      'mute-1' |
      'low-volume' |
      'wall-clock' |
      'wristwatch-1' |
      'drop' |
      'web' |
      'wristwatch-2' |
      'writing-6' |
      'zoom' |
      'zoom-in' |
      'zoom-out';

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
