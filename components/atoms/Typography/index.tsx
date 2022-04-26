import { ReactNode, useMemo } from 'react';

export interface ITypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  children: ReactNode;
}

const Typography = ({
  variant: Component = 'p',
  align = 'left',
  className,
  children,
  ...props
}: ITypographyProps) => {
  // Defining the types of alignments the component will support
  const alignMapping = useMemo(
    () => ({
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    }),
    []
  );

  return (
    <Component
      className={`${align && alignMapping[align]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Typography };
