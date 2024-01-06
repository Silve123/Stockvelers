declare module 'react-native-ico-ecologism' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'battery-status-symbol' |
      'battery-tool-with-bolt-sign' |
      'battery-with-a-bolt-symbol' |
      'battery-with-recycle-symbol' |
      'corn' |
      'danger-signal' |
      'descending-temperature-on-thermometer-tool' |
      'earth-between-hands' |
      'ecological-fuel-bomb' |
      'ecological-generator-tool-of-rotatory-fan' |
      'ecological-solar-power-for-a-battery' |
      'ecological-tool-for-winds-to-generate-energy' |
      'electric-car-ecological-transport' |
      'electrical-lines-tower-support' |
      'factory-contamination-towers' |
      'factory-tower-with-biohazard-smoke' |
      'factory-towers-spreading-smoke' |
      'faucet-side-view-with-falling-drop-of-water' |
      'flower-shape-of-five-petals' |
      'fuel-tank' |
      'fully-charged-battery' |
      'hand-with-a-leaf' |
      'house-side-view' |
      'human-feet-shape' |
      'leaf-shape' |
      'leaves' |
      'lightbulb-black-shape' |
      'lightbulb-with-a-bolt' |
      'low-battery-status' |
      'o2-symbol-in-a-cloud' |
      'person-throwing-paper-to-a-trash-can' |
      'planet-grid-with-a-leaf-international-ecological-symbol' |
      'planetary-grid' |
      'raindrops-falling-of-a-black-cloud' |
      'recycle-symbol-of-three-leaves' |
      'rural-house-with-wind-mill' |
      'star-shape-with-circular-arrows-circle' |
      'sun-ecological-power' |
      'thermometer-measuring-ascending-temperature' |
      'thermometer-temperature-control-tool' |
      'thermometer-tool' |
      'thermometer' |
      'toxic-tank-container-with-ecological-risk' |
      'tree-silhouette' |
      'watering-can-tool-silhouette-of-water-container-for-garden' |
      'watering-tool-for-gardening' |
      'whale-oceanic-mammal-side-view' |
      'wind-mill-ecological-generator' |
      'world';

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
