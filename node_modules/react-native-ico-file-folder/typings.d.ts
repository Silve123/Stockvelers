declare module 'react-native-ico-file-folder' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'folder-42' |
      'contract-14' |
      'video-file-2' |
      'folder-41' |
      'outbox' |
      'text' |
      'taxes' |
      'list-1' |
      'swf' |
      'list' |
      'file-70' |
      'folder-40' |
      'folder-39' |
      'file-69' |
      'analytics-7' |
      'file-68' |
      'audio-file' |
      'curriculum-vitae-4' |
      'psd-1' |
      'file-67' |
      'picture-4' |
      'picture-3' |
      'pdf-1' |
      'folders' |
      'file-66' |
      'file-65' |
      'file-64' |
      'email-1' |
      'archive-3' |
      'notepad' |
      'clipboard-5' |
      'monitor' |
      'mkv-2' |
      'file-63' |
      'file-62' |
      'folder-38' |
      'invoice' |
      'image' |
      'file-61' |
      'gif-1' |
      'folder-37' |
      'file-60' |
      'flv' |
      'file-59' |
      'file-58' |
      'favorite' |
      'folder-36' |
      'email' |
      'contract-13' |
      'inbox-1' |
      'pdf' |
      'doc-3' |
      'folder-35' |
      'curriculum-vitae-3' |
      'folder-34' |
      'contract-12' |
      'contract-11' |
      'contract-10' |
      'file-57' |
      'css' |
      'network' |
      'clipboard-4' |
      'checklist-2' |
      'analytics-6' |
      'certificate-6' |
      'certificate-5' |
      'jpg' |
      'cabinet-1' |
      'file-56' |
      'psd' |
      'folder-33' |
      'certificate-4' |
      'analytics-5' |
      'certificate-3' |
      'certificate-2' |
      'contract-9' |
      'xls' |
      'txt' |
      'file-55' |
      'file-54' |
      'file-53' |
      'file-52' |
      'file-51' |
      'folder-32' |
      'contract-8' |
      'file-50' |
      'music-file' |
      'certificate-1' |
      'contract-7' |
      'archive-2' |
      'curriculum-vitae-2' |
      'folder-31' |
      'folder-30' |
      'file-49' |
      'sketch' |
      'folder-29' |
      'folder-28' |
      'clipboard-3' |
      'picture-2' |
      'folder-27' |
      'analytics-4' |
      'file-48' |
      'file-47' |
      'contract-6' |
      'folder-26' |
      'folder-25' |
      'file-46' |
      'file-45' |
      'file-44' |
      'contract-5' |
      'checklist-1' |
      'curriculum-vitae-1' |
      'folder-24' |
      'archive-1' |
      'png' |
      'file-43' |
      'file-42' |
      'folder-23' |
      'folder-22' |
      'ps' |
      'iso' |
      'curriculum-vitae' |
      'file-41' |
      'file-40' |
      'zip-file-2' |
      'file-39' |
      'mkv-1' |
      'video-file-1' |
      'file-38' |
      'file-37' |
      'file-36' |
      'file-35' |
      'file-34' |
      'file-33' |
      'file-32' |
      'folder-21' |
      'contract-4' |
      'folder-20' |
      'file-31' |
      'analytics-3' |
      'folder-19' |
      'doc-2' |
      'folder-18' |
      'file-30' |
      'file-29' |
      'cdr' |
      'file-28' |
      'folder-17' |
      'folder-16' |
      'ai' |
      'zip-file-1' |
      'gif' |
      'contract-3' |
      'file-27' |
      'file-26' |
      'file-25' |
      'file-24' |
      'doc-1' |
      'picture-1' |
      'folder-15' |
      'file-23' |
      'file-22' |
      'folder-14' |
      'file-21' |
      'file-20' |
      'contract-2' |
      'file-19' |
      'file-18' |
      'file-17' |
      'folder-13' |
      'contract-1' |
      'certificate' |
      'file-16' |
      'contract' |
      'folder-12' |
      'file-15' |
      'folder-11' |
      'file-14' |
      'file-13' |
      'file-12' |
      'file-11' |
      'file-10' |
      'zip-file' |
      'folder-10' |
      'html' |
      'analytics-2' |
      'file-9' |
      'clipboard-2' |
      'file-8' |
      'picture' |
      'file-7' |
      'cabinet' |
      'analytics-1' |
      'folder-9' |
      'file-6' |
      'folder-8' |
      'clipboard-1' |
      'checklist' |
      'video-file' |
      'clipboard' |
      'analytics' |
      'file-5' |
      'folder-7' |
      'folder-6' |
      'file-4' |
      'doc' |
      'folder-5' |
      'file-3' |
      'folder-4' |
      'php' |
      'file-2' |
      'file-1' |
      'folder-3' |
      'folder-2' |
      'inbox' |
      'file' |
      'archive' |
      'folder-1' |
      'mkv' |
      'folder';

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
