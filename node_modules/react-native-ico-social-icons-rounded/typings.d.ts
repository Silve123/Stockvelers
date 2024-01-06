declare module 'react-native-ico-social-icons-rounded' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = '500px-logo-1' |
      '500px-logo' |
      '51-on-social-logo' |
      '56-social-logo' |
      'ads-of-the-world-logo' |
      'ads-scuttlepad-logo' |
      'arte10-logo' |
      'ashley-madison-social-logo' |
      'asmallworld-logo' |
      'badoo-social-logotype' |
      'baidu-logo' |
      'bananity-social-logo' |
      'bandcamp-logo' |
      'bebo-social-logotype' |
      'behance-logo' |
      'bettercodes-logo' |
      'bisquits-logo' |
      'bitacoras-logo' |
      'bitacoras-symbol' |
      'blackplanet-logotype' |
      'blogbus-logo' |
      'blogger-logotype' |
      'bloson-logo' |
      'bola-a-logo' |
      'buzznet-logo' |
      'cafemom-logo' |
      'care2-logo' |
      'caringbridge-logo' |
      'cellufun-logo' |
      'citeulike-logo' |
      'classmates-logotype-symbol' |
      'club-dante-social-logotype' |
      'coderwall-logo' |
      'colourlovers-logo' |
      'coroflot' |
      'couchsurfing-logo' |
      'creattica-logo' |
      'cross-tv-logo' |
      'dailymotion-logo' |
      'deezer-logo' |
      'delicious-logotype-of-squares' |
      'desarrollo-web-or-web-development-logo' |
      'designrelated-logotype' |
      'deviantart-logo' |
      'digg-logo' |
      'digg-logotype' |
      'divoblogger-logo' |
      'doodle-ly-logotype' |
      'douban-logo' |
      'dribbble-logo' |
      'etsy-logo' |
      'everloop-logo' |
      'ex-fm-logo' |
      'eyeem-logo' |
      'facebook-logo' |
      'fanlala-logo' |
      'flickr-logo' |
      'flipkart-logo' |
      'flixster-logo' |
      'fod-social-logo' |
      'fontli-logo' |
      'fotki-logo' |
      'fotolog-social-network-logo' |
      'foursquare-logo' |
      'friendster-logo' |
      'funny-or-die-logo' |
      'gaiaonline-logo' |
      'gather-logo' |
      'geni-social-logo' |
      'geonick-logo' |
      'glipho-logo' |
      'glogster-logo' |
      'google-plus-social-logotype' |
      'grooveshark-logotype' |
      'grou-ps-logo' |
      'habbo-logotype-1' |
      'habbo-logotype' |
      'heello-logo' |
      'hexun-logo' |
      'hi5-social-logo' |
      'hipstamatic-logo' |
      'hubbub-logo' |
      'inside-the-hotel-logotype' |
      'instagram-social-network-logo-of-photo-camera' |
      'intellectconnect-logo' |
      'iqyi-logo' |
      'itsmy-logo-1' |
      'itsmy-logo' |
      'jiepang-logotype' |
      'jux-logo' |
      'kaixin101-logotype-of-a-smiling-star' |
      'kiwibox-logo' |
      'ku6-logo' |
      'last-fm-logo' |
      'linkedin-logo' |
      'literatura-nova-logo' |
      'meetic-logo' |
      'meetme-logo' |
      'meetup-logo' |
      'meetyourfriends-logotype' |
      'meneame-social-network-logo-of-an-elephant' |
      'metacafe-logo' |
      'mixi-logo' |
      'mocospace-logo' |
      'my-heritage-logo' |
      'my-life-logo' |
      'my-life-social-logo' |
      'my-space-logo' |
      'myfolio-logo' |
      'myspace-logotype' |
      'ning-social-logo' |
      'nk-social-symbol' |
      'notasweb-logo' |
      'odnoklassniki-logo' |
      'orkut-logo' |
      'p1-social-logotype' |
      'panamo-logo' |
      'path-social-logotype' |
      'pengyu-logotype' |
      'pheed-logo' |
      'pictify-logo' |
      'pinspire-logo-symbol' |
      'pinstagram-logo' |
      'pinterest-social-logo' |
      'podio-social-logo' |
      'qq-social-logo-of-a-penguin' |
      'questionity-logotype' |
      'qzone-logo' |
      'ravelry-logo-1' |
      'ravelry-logo' |
      'redalyc-logo' |
      'reddit-logo' |
      'reddit-social-logo-character' |
      'rendezvous-logo' |
      'renren-logo' |
      'researchgate-logo' |
      'reverbnation-logo' |
      'ryze-logo' |
      'ryze-social-logo' |
      'scoop-it-logo-1' |
      'scoop-it-logo' |
      'scribd-logo' |
      'sina-logo' |
      'sina-social-logo-of-an-eye' |
      'skyrock-logo' |
      'slideshare-logo' |
      'socialcam-logo' |
      'sonico-logo' |
      'sonico-social-logo' |
      'soundcloud-logo' |
      'spotbros-logo' |
      'spotify-logo' |
      'studivz-social-logo' |
      'stumbleupon-logo' |
      'symbaloo-logotype' |
      'tadaa-logotype' |
      'tagged-logotype' |
      'tagworld-logotype-symbol' |
      'taringa-logo' |
      'telly-social-symbol' |
      'tencent-weibo-logo' |
      'threadless-logotype' |
      'tianji-logotype-symbol' |
      'travbuddy-social-logotype' |
      'tribe-social-logotype' |
      'tripadvisor-logotype' |
      'tu-tv-logo' |
      'tudou-logo' |
      'tuenti-social-logo' |
      'tumblr-logo' |
      'tv-tag-logotype-symbol' |
      'twitpic-symbol' |
      'twitter-logo' |
      'twitter-social-logotype' |
      'twoo-logo' |
      'typophile-logo' |
      'ushi-logo' |
      'vampirefreaks-logo' |
      'viadeo-logo' |
      'viddy-logotype' |
      'vimeo-social-logo' |
      'vine-logo-1' |
      'vine-logo' |
      'vk-social-logotype' |
      'wayn-social-network-logo' |
      'weeworld-logo' |
      'weheartit-logo' |
      'weibo-social-logo' |
      'widbook-logo' |
      'wikiloc-logo' |
      'wikipedia-logo' |
      'wikipedia-logotype-of-earth-puzzle' |
      'wordpress-logo' |
      'xanga-logo' |
      'xanga-symbol' |
      'xiami-social-symbol' |
      'xing-social-logotype' |
      'yelp-logo' |
      'youku-logo' |
      'yoursphere-logo' |
      'youtube-logotype' |
      'youtube-symbol' |
      'yupoo-logo' |
      'zorpia-logo';

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
