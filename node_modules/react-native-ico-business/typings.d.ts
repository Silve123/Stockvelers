declare module 'react-native-ico-business' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'idea-3' |
      'minimize' |
      'file-7' |
      'share-1' |
      'idea-2' |
      'thinking' |
      'safebox' |
      'balance' |
      'wagon' |
      'crane' |
      'ship' |
      'handshake' |
      'get-money-3' |
      'get-money-2' |
      'get-money-1' |
      'get-money' |
      'warehouse' |
      'invoice' |
      'compass' |
      'umbrella' |
      'mail' |
      'user-2' |
      'tag' |
      'placeholder' |
      'badge' |
      'file-6' |
      'user-1' |
      'hierarchical-structure' |
      'piggy-bank' |
      'file-5' |
      'idea-1' |
      'map-1' |
      'settings-1' |
      'map' |
      'delivery-truck' |
      'browser-1' |
      'monitor-2' |
      'monitor-1' |
      'monitor' |
      'calendar-4' |
      'diamond' |
      'bank' |
      'line-chart-3' |
      'line-chart-2' |
      'file-4' |
      'smartphone' |
      'money-bag-2' |
      'money-bag-1' |
      'microscope' |
      'earth-globe' |
      'flask' |
      'trophy' |
      'calendar-3' |
      'calendar-2' |
      'briefcase' |
      'agenda' |
      'chat-2' |
      'calculator' |
      'check' |
      'loss' |
      'line-chart-1' |
      'certificate' |
      'money-bag' |
      'wallet' |
      'worldwide-2' |
      'money' |
      'percentage' |
      'pie-chart-1' |
      'megaphone' |
      'line-chart' |
      'bar-chart' |
      'image' |
      'file-3' |
      'chat-1' |
      'networking' |
      'profits' |
      'stopwatch' |
      'user' |
      'calendar-1' |
      'pie-chart' |
      'clock' |
      'ring' |
      'headset' |
      'id-card' |
      'calendar' |
      'settings' |
      'share' |
      'credit-card' |
      'keyboard' |
      'chat' |
      'cloud-computing' |
      'target' |
      'file-2' |
      'idea' |
      'exchange-2' |
      'exchange-1' |
      'exchange' |
      'factory' |
      'presentation' |
      'analytics' |
      'worldwide-1' |
      'shield' |
      'videocall' |
      'email-1' |
      'padlock' |
      '24-hours' |
      'file-1' |
      'worldwide' |
      'phone-call' |
      'browser' |
      'file' |
      'buildings' |
      'email';

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
