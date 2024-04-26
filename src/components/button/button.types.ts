import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type TButton = {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
    className?: string;
    icon?: {
      icon: IconDefinition;
      color?: FontAwesomeIconProps['color'];
      size?: FontAwesomeIconProps['size'];
    };
    variant?: 'primary' | 'white' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'full';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;