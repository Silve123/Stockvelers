declare module 'react-native-ico-supraicons' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'a-minus-test-symbol' |
      'a-plus-symbol' |
      'add-favorite-star-interface-symbol' |
      'add-song-interface-symbol' |
      'add-to-cart-commercial-symbol' |
      'add-to-shopping-cart-e-commerce-symbol' |
      'adding-to-shopping-cart' |
      'apple-black-fruit-shape' |
      'apple-black-shape' |
      'arroba-symbol' |
      'balloon-black-oval-shape' |
      'baseball-ball' |
      'baseball-circular-ball' |
      'basket' |
      'battery-black-silhouette-shape' |
      'battery-level-interface-symbol' |
      'battery-with-three-empty-areas' |
      'birthday-cake-with-one-burning-candle-on-top' |
      'black-flag' |
      'black-male-t-shirt' |
      'book-opened-pages' |
      'bookmark-on-an-opened-book' |
      'briefcase-1' |
      'briefcase-business-tool' |
      'briefcase' |
      'bus-front' |
      'butterfly-top-view' |
      'car-front' |
      'castle-with-a-flag-on-top' |
      'cellphone-1' |
      'cellphone-2' |
      'cellphone-3' |
      'cellphone' |
      'chat-comment' |
      'checkmark' |
      'circular-wall-clock' |
      'clock-circular-tool' |
      'clock-of-wall' |
      'clock-time-tool' |
      'closed-trash-can-tool' |
      'clouds' |
      'coffee-hot-cup' |
      'coffee-or-tea-mug' |
      'comment-bubble-with-three-dots-inside' |
      'comment-speech-bubble-of-chat' |
      'comment' |
      'comments-bubbles' |
      'commercial-basket-with-down-arrow-symbol' |
      'compass-circular-tool' |
      'couch' |
      'cpu' |
      'credit-card-back' |
      'credit-or-debit-card-back' |
      'delete-shopping-cart-symbol' |
      'delete-song-interface-symbol' |
      'desk-microphone' |
      'disc-1' |
      'disc' |
      'disk' |
      'download-interface-symbol-of-down-arrow-on-a-tray' |
      'download' |
      'drawing-tablet-design-tool' |
      'dress-1' |
      'dress' |
      'drink-cocktail-glass-side-view' |
      'e-commerce-shopping-cart-tool' |
      'earth-globe' |
      'education-school-book' |
      'eiffel-tower' |
      'equalizer-bars-symbol' |
      'equalizer' |
      'fashion-black-dress' |
      'feminine-purse' |
      'film-strip' |
      'flower-beautiful-shape-of-five-petals' |
      'flower-shape-photo-camera-interface-symbol' |
      'flower' |
      'fork-and-knife-eating-utensils' |
      'fork-and-spoon' |
      'full-battery-interface-symbol' |
      'gift-box-surrounded-by-a-ribbon' |
      'gift-box-with-a-ribbon-on-top' |
      'gift-box-with-big-ribbon-bow' |
      'giftbox-1' |
      'giftbox' |
      'half-battery-level-interface-symbol' |
      'headphones-of-straight-shape' |
      'headphones-tool' |
      'headphones' |
      'heart' |
      'heel-elegant-feminine-shoe-shape-silhouette-from-side-view' |
      'heel' |
      'holly-xmas-symbol-of-branch-with-leaves-and-fruits' |
      'home-interface-button-symbol' |
      'home-interface-symbol' |
      'hot-soup-bowl' |
      'house-building' |
      'house-shape' |
      'information-square' |
      'internet-planetary-circulr-grid-symbol' |
      'keyboard-with-cord' |
      'laptop-1' |
      'laptop' |
      'leaf-1' |
      'leaf-natural-shape-silhouette' |
      'leaf-or-flower-silhouette-shape' |
      'leaf-outlined-shape' |
      'leaf-plant-part-shape' |
      'leaf' |
      'leaves-on-a-branch-diagonal-shape' |
      'leaves' |
      'lightning-bolt-symbol-of-flash' |
      'like-thumb-up-symbol-of-straight-lines-hand' |
      'like' |
      'lock' |
      'low-battery-level-interface-symbol' |
      'mail-closed-envelope-back' |
      'man-riding-on-a-bike' |
      'man-throwing-a-can-to-trash-container' |
      'margarita' |
      'microphone-voice-audio-tool-with-cord' |
      'money-dollar-sign-in-a-square' |
      'moon-and-stars' |
      'moon-phase-symbol-for-weather-interface' |
      'mouse' |
      'mug' |
      'music-note-symbol' |
      'musical-note-symbol' |
      'no-smoking-circular-signal' |
      'no-smoking-signal' |
      'notebook-closed-cover-with-a-label-and-spring' |
      'open-trash-can' |
      'opened-letter-envelope-from-back-view' |
      'opened-trash-can-1' |
      'opened-trash-can-from-side-view' |
      'opened-trash-can' |
      'out-of-basket-commercial-symbol' |
      'out-of-cart-commercial-symbol-for-e-commerce' |
      'out-of-the-cart-symbol-for-e-commerce' |
      'outlined-heart-shape' |
      'paperclip' |
      'person-giving-a-giftbox' |
      'photo-camera-1' |
      'photo-camera-frontal-view' |
      'photo-camera-of-rectangular-shape' |
      'photo-camera' |
      'photo-framed-interface-symbol' |
      'picture-with-mountains-landscape' |
      'plant-branch-with-leaves-1' |
      'plant-branch-with-leaves' |
      'plant-leaf-shape' |
      'podcast-symbol' |
      'power-button' |
      'printer' |
      'purse-of-dark-design' |
      'purse' |
      'puzzle-piece-black-silhouette-shape' |
      'radiation-circular-symbol-with-three-rays' |
      'rain-cloud' |
      'rain-cloudy-weather-symbol' |
      'ray' |
      'recycle-triangular-sign-of-three-rotating-arrows-in-a-square' |
      'recycle-triangular-symbol-of-three-arrows-rotation' |
      'refresh-arrows-symbol-of-interface' |
      'reload-circular-arrow-symbol' |
      'rest-star-interface-symbol' |
      'ribbon-bow-decoration' |
      'ribbon-bow-shape' |
      'ribbon-bow' |
      'rider-of-a-bicycle' |
      'right-arrow-signal' |
      'ring-with-a-diamond' |
      'ring-with-precious-gem' |
      'ring-with-precious-stone' |
      'rss-square-symbol' |
      'running-man-silhouette-to-left' |
      'sale-signal' |
      'sale-tag-commercial-tool' |
      'screen' |
      'ship' |
      'shopping-basket' |
      'shopping-cart-1' |
      'shopping-cart-2' |
      'shopping-cart-commerce-tool' |
      'shopping-cart' |
      'short-silhouette' |
      'short' |
      'shorts' |
      'snowflake-shape-1' |
      'snowflake-shape' |
      'snowflake-xmas-shape' |
      'soda-glass' |
      'sound-speaker' |
      'speaker-mute-sound-interface-symbol' |
      'speech-bubbles-chat-symbol' |
      'spirals-floral-ornament' |
      'square-photo-camera-tool' |
      'star-empty-shape' |
      'stars-couple-of-two-sizes' |
      'stereo-speakers-musical-tools' |
      'storm-weather-symbol-of-a-dark-cloud-with-a-lightning-bolt' |
      'sun-1' |
      'sun-covered-by-cloud-weather-symbol' |
      'sun' |
      'taxi' |
      'television' |
      'theater' |
      'train' |
      'trash-can-with-cover' |
      'trash-can' |
      'trash-closed-can' |
      'trebol-shape' |
      'tree-of-rounded-foliage-shape' |
      'tree' |
      'tv' |
      'two-black-stormy-clouds-symbol-of-weather' |
      'two-cogwheels-settings-interface-symbol' |
      'umbrella-covering-tool' |
      'umbrella-opened-silhouette' |
      'umbrella-protecting-tool' |
      'umbrella-protection-tool' |
      'umbrella' |
      'unlike' |
      'unlock' |
      'up-and-down-opposite-arrows-symbol-side-by-side' |
      'upload-file-symbol-for-interface' |
      'upload-interface-symbol-of-up-arrow-and-a-tray' |
      'upload-interface-symbol-of-up-arrow-from-a-tray' |
      'user-male-shape' |
      'user-shape' |
      'verified-notes-symbol' |
      'vertical-airplane-shape-symbol' |
      'video-camera-side-view' |
      'video-camera' |
      'wireless-keyboard' |
      'wireless-mouse' |
      'woman-carrying-a-present-box' |
      'worker-running-with-suitcase' |
      'world-wide-web' |
      'zoom-in-interface-symbol-of-magnifier-with-plus-sign' |
      'zoom-in-interface-symbol' |
      'zoom-interface-dark-symbol' |
      'zoom-out-interface-symbol' |
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
