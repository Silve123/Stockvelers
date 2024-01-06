declare module 'react-native-ico-stylish' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'bikini-one-piece-swimwear' |
      'bikini-shape-1' |
      'bikini-shape' |
      'bikini' |
      'blush-makeup-circular-opened-case' |
      'bottle-black-and-rounded-shape' |
      'bottle-black-elegant-silhouette' |
      'bottle-black-shape' |
      'bottle-of-elegant-shape' |
      'bottle-shape' |
      'bow-black-silhouette' |
      'button-with-cross-stitch' |
      'camera-film-strip' |
      'cat-eyes-glasses' |
      'childish-eyeglasses' |
      'chop-sticks' |
      'circular-perfume-bottle-with-rectangular-cover' |
      'classic-sewing-machine-with-spool-of-thread' |
      'clip-of-big-size-for-hair' |
      'clothes-button-black-shape-side-view' |
      'clothes-button-with-four-holes' |
      'clothes-button' |
      'clothes-circular-button-with-a-cross-of-thread' |
      'clothes-hanger' |
      'clothing-patch-with-stitches' |
      'clothing-stitches' |
      'cologne-black-bottle-shape' |
      'comb-and-scissors-for-hair' |
      'cord-crosses-of-clothes' |
      'cord-of-a-shoe' |
      'couture-mannequin' |
      'creme-container-black-shape' |
      'curling-hair-with-tissue-roll' |
      'cylindrical-lamp-home-decor' |
      'dangling-earrings' |
      'diamond-engagement-ring-silhouette' |
      'diamond-ring-silhouette' |
      'dice-with-four-points' |
      'dress-elegant-thin-black-shape' |
      'dress-long-and-black-shape' |
      'dress-of-vintage-black-design-style' |
      'dress' |
      'electric-sewing-machine' |
      'engagement-ring-silhouette' |
      'eye-shadow-palette-with-brush' |
      'eyebrow-tweezers' |
      'eyeglasses-for-vision-improvement' |
      'eyeglasses-of-rounded-big-shape' |
      'eyeglasses-of-thin-shape' |
      'eyeglasses-with-half-frame' |
      'eyeliner-pencils' |
      'eyes-makeup-pencils' |
      'eyes-shades-makeup' |
      'fashionable-hand-bag-with-long-handle' |
      'female-black-dress' |
      'female-black-handbag-side-view' |
      'female-black-handbag' |
      'female-dark-long-hair' |
      'female-dress-1' |
      'female-dress' |
      'female-eye' |
      'female-hairstyle-wig' |
      'female-hand-bag-with-metal-handle-tips' |
      'female-handbag-1' |
      'female-handbag' |
      'female-long-black-dress' |
      'female-long-black-hair' |
      'female-sexy-dress-silhouette' |
      'female-sexy-dress' |
      'female-skirt-silhouette' |
      'female-swimsuit' |
      'female-wallet-black-shape' |
      'female-with-long-hair-and-side-bangs' |
      'feminine-fashion-mannequin' |
      'flower-shaped-clothes-button' |
      'fountain-jar-silhouette' |
      'glasses-for-eyes' |
      'glasses-of-cat-eyes-shape' |
      'glasses-shape' |
      'glasses-vision-tool' |
      'glasses' |
      'hair-clip-tool' |
      'hair-iron' |
      'hair-sticks-couple' |
      'hair-wig-long-and-black-shape' |
      'hair-wig-with-side-bangs' |
      'half-frame-eyeglasses' |
      'hand-nails-painting-bottle' |
      'handbag-elegant-design' |
      'handbag-of-female-design' |
      'heart-shaped-button-for-clothes' |
      'heart-shaped-eyeglasses' |
      'heart-shaped-jewelry-pendant' |
      'hobo-inspired-bag-with-big-handle' |
      'hobo-shoulder-bag' |
      'human-black-hair-shape' |
      'jacket-elegant-feminine-black-clothes-for-business' |
      'jar-of-elegant-tall-shape' |
      'lace-dress-with-white-belt' |
      'lacquer-for-nails' |
      'lipstick-silhouette' |
      'lipstick' |
      'liquid-eyeliner-silhouette' |
      'long-black-gown' |
      'long-dark-hair-in-points' |
      'long-dress-with-short-sleeves' |
      'long-sleeve-flowy-dress' |
      'make-up-brushes-for-blush-and-lipstick' |
      'makeup-pad' |
      'makeup-sets-of-circular-shape-in-couple-of-eyes-shades-and-blush' |
      'male-mannequin' |
      'mannequin-with-stand' |
      'maracas-couple' |
      'mascara-eye-makeup-1' |
      'mascara-eye-makeup' |
      'mirror-in-blush-circular-case' |
      'nail-polish-bottle-silhouette' |
      'necklace-of-black-pearls-of-short-circular-shape' |
      'needle-case' |
      'needle-with-thread-to-sew-clothes' |
      'needle' |
      'needles-set' |
      'open-mini-purse' |
      'oval-shape-reading-eyeglasses' |
      'paint-brush-tip' |
      'parfum-black-elegant-vintage-container-shape' |
      'parfum-bottle-of-rounded-shape' |
      'parfum-elegant-vintage-bottle-black-silhouette-shape' |
      'parfum-little-bottle-of-elegant-shape-black-silhouette' |
      'parfum-tall-elegant-bottle-black-silhouette' |
      'pearl-necklace-with-diamond-pendant' |
      'pearls-necklace-oval-frame-shape' |
      'perdible-pin' |
      'perfume-bottle-made-of-geometric-shapes' |
      'perfume-bottle-with-geometric-edges' |
      'perfume-bottle-with-sprayer' |
      'perfume' |
      'personal-care-bottle-liquids-container' |
      'pin-cushion-with-several-pins' |
      'pin-variant' |
      'pins-circle' |
      'plump-lips-with-gloss' |
      'pocket-shape' |
      'polo-shirt-for-women' |
      'pouch-bag-with-buckle' |
      'purse-with-white-details' |
      'reading-eyeglasses-1' |
      'reading-eyeglasses' |
      'rectangular-eyeglass-frame' |
      'rectangular-eyeglasses' |
      'rectangular-pouch-bag' |
      'rectangular-pouch-with-g-logo' |
      'rectangular-purse-with-white-details' |
      'rectangular-thin-eyeglasses' |
      'ribbon-tie-with-white-details' |
      'ring-side-view-silhouette' |
      'ring-with-oval-shaped-design' |
      'round-earrings' |
      'round-eyeglasses' |
      'safety-pin' |
      'scarf' |
      'scissors-closed' |
      'scissors-inverted-view' |
      'security-pin-shape' |
      'sewing-machine' |
      'sewing-thimble-black-variant' |
      'sewing-thimble' |
      'sexy-female-dress-black-shape' |
      'sexy-feminine-dress-in-black' |
      'shoulder-bag' |
      'shoulder-length-with-full-bangs-wig' |
      'skirt-black-shape' |
      'skirt-black-short-shape' |
      'skirt-with-slit-and-belt' |
      'skirt-with-white-lining' |
      'spherical-bottle-of-perfume' |
      'star-clothes-button' |
      'star-pendant' |
      'strapless-tube-dress-with-belt' |
      'string-bikini' |
      'stylish-home-decors' |
      'stylish-perfume-bottle-1' |
      'stylish-perfume-bottle-silhouette' |
      'stylish-perfume-bottle' |
      'stylish-strapless-dress-with-belt-and-petticoat' |
      'swimsuit-sexy-and-feminine-of-two-pieces' |
      'swimsuit' |
      't-shirt-silhouette' |
      'thick-thread-spool' |
      'thread-ball' |
      'thread-spool-1' |
      'thread-spool' |
      'thread' |
      'tools-case-with-s-logo' |
      'tube-swimwear' |
      'wallet' |
      'wheel-with-supporter-for-furniture' |
      'yarn-spool' |
      'zip' |
      'zipper-tool';

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
