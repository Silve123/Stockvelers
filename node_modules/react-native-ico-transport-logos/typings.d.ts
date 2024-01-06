declare module 'react-native-ico-transport-logos' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'kia' |
      'smart' |
      'fiat' |
      'ford' |
      'mini' |
      'porsche' |
      'jeep' |
      'holden' |
      'ferrari' |
      'tesla' |
      'sym-motor' |
      'tvs' |
      'bimota' |
      'beat' |
      'vespa' |
      'victory' |
      'kymco' |
      'daelim' |
      'hero' |
      'triumph' |
      'hyosung' |
      'derbi' |
      'harley-davidson' |
      'piaggio' |
      'husqvarna' |
      'kawasaki' |
      'ktm' |
      'honda-1' |
      'yamaha' |
      'ducati' |
      'porto' |
      'new-york' |
      'underground' |
      'tokyo' |
      'sao-paulo' |
      'danish-air-transport' |
      'xiamen-air' |
      'swiss-international-airlines' |
      'bangkok-airways' |
      'turkish-airlines' |
      'delta-airlines' |
      'klm' |
      'malaysia-airlines' |
      'emirates' |
      'singapore-airlines' |
      'iberia' |
      'british-airways' |
      'air-china' |
      'vueling' |
      'air-newzealand' |
      'thai' |
      'qantas' |
      'japan-airlines' |
      'american-airlines' |
      'air-canada' |
      'citroen' |
      'nissan' |
      'subaru' |
      'mercury' |
      'suzuki' |
      'infiniti' |
      'peugeot' |
      'bmw' |
      'acura' |
      'hyundai' |
      'pontiac' |
      'volkswagen' |
      'lexus' |
      'honda' |
      'renault' |
      'opel' |
      'cadillac' |
      'volvo' |
      'audi' |
      'chevrolet' |
      'mercedes-benz' |
      'mitsubishi' |
      'buick' |
      'toyota' |
      'mazda';

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
