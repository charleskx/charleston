import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = ({
  children,
  className,
  startIcon,
  endIcon,
  disabled = false,
  fullWidth = false,
  size = 'medium',
  variant = 'text',
  ...props
}: IButtonProps) => {
  // Defining the types of variants the component will support
  const variantsMapping = useMemo(
    () => ({
      text: 'border-0',
      outlined: 'border',
    }),
    []
  );

  // Defining the types of sizes the component will support
  const sizesMapping = useMemo(
    () => ({
      small: 'py-1 px-3 text-xs gap-3 rounded',
      medium: 'py-2 px-6 gap-4 rounded-md',
      large: 'py-5 px-10 text-lg gap-5 rounded-xl',
    }),
    []
  );

  return (
    <button
      disabled={disabled}
      className={`uppercase font-medium box-border flex items-center justify-center ${
        fullWidth && 'w-full'
      } ${disabled && 'opacity-60'} ${variant && variantsMapping[variant]} ${
        size && sizesMapping[size]
      } ${className}`}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export { Button };
