declare module 'react-native-ico-social-media' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'youtube' |
      'yelp' |
      'wordpress' |
      'wikipedia' |
      'whatsapp' |
      'vine' |
      'vimeo' |
      'twitter' |
      'tumblr' |
      'trello' |
      'stumbleupon' |
      'spotify' |
      'soundcloud' |
      'snapchat' |
      'skype' |
      'shutterstock' |
      'scribd' |
      'reddit' |
      'quora' |
      'plaxo' |
      'pinterest' |
      'periscope' |
      'paypal' |
      'path' |
      'myspace' |
      'medium' |
      'linkedin' |
      'kickstarter' |
      'instagram' |
      'html-5' |
      'howcast' |
      'hi5' |
      'google-plus' |
      'foursquare' |
      'flickr' |
      'facebook' |
      'etsy' |
      'envato' |
      'dropbox' |
      'dribbble' |
      'deviantart' |
      'delicious' |
      'creative-market' |
      'buffer' |
      'box' |
      'bing' |
      'behance' |
      'android' |
      'amazon';

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
