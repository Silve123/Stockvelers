declare module 'react-native-ico-logo' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'yelp' |
      'xiaomi' |
      'xbox' |
      'windows-media-player' |
      'wechat' |
      'waze' |
      'vlc' |
      'utorrent' |
      'uber' |
      'tripadvisor' |
      'trello' |
      'tinder' |
      'swift' |
      'swarm' |
      'overflowing' |
      'smugmug' |
      'slideshare' |
      'slack' |
      'sketch' |
      'simple' |
      'shazam' |
      'safari' |
      'quora' |
      'quicktime' |
      'pocket' |
      'periscope' |
      'pepsi' |
      'paypal' |
      'pandora' |
      'opera' |
      'open-source' |
      'odnoklassniki' |
      'nvidia' |
      'nike' |
      'netflix' |
      'msn' |
      'word' |
      'windows' |
      'powerpoint' |
      'outlook' |
      'office' |
      'microsoft' |
      'excel' |
      'edge' |
      'microsoft-access' |
      'mcdonalds' |
      'kik' |
      'inbox' |
      'icloud' |
      'ibooks' |
      'html-5' |
      'houzz' |
      'groupon' |
      'grooveshark' |
      'google-play' |
      'google-earth' |
      'google-duo' |
      'chrome' |
      'google-analytics' |
      'google-allo' |
      'adwords' |
      'adsense' |
      'gmail' |
      'fiverr' |
      'firefox' |
      'finder' |
      'feedburner' |
      'evernote' |
      'ello' |
      'electronics-arts' |
      'drupal' |
      'disqus' |
      'css-3' |
      'coderwall' |
      'brightkite' |
      'blackberry' |
      'bing' |
      'beats-pill' |
      'basecamp' |
      'baidu' |
      'ati' |
      'apple' |
      'app-net' |
      'android' |
      'amd' |
      'air-bnb' |
      'aim' |
      'premiere' |
      'prelude' |
      'photoshop' |
      'adobe' |
      'adobe-lightroom' |
      'indesign' |
      'illustrator' |
      'encore' |
      'creative-cloud' |
      'adobe-bridge' |
      'after-effects' |
      'adidas';

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
