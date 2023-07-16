import { ComponentPropsWithoutRef, ReactNode } from 'react';
import NextLink from 'next/link';

import { mergeClsx } from 'utils/helpers';

const linkVariants = {
  default: 'font-semibold hover:text-green-700',
  navLink: 'font-bold uppercase hover:text-green-700',
  btnLight:
    'font-semibold border border-black rounded-3xl px-4 py-2 hover:bg-gray-300',
  btnDark:
    'font-semibold rounded-3xl bg-black text-white px-4 py-2 hover:opacity-70',
};

const fontSizes = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

type Props = ComponentPropsWithoutRef<'a'> &
  Partial<{
    variant: keyof typeof linkVariants;
    size: keyof typeof fontSizes;
    isExternal: boolean;
    iconLeft: ReactNode;
    iconRight: ReactNode;
  }>;

export const CustomLink = ({
  className,
  children,
  iconLeft,
  iconRight,
  variant = 'default',
  size = 'medium',
  href = '#',
  isExternal = false,
  ...props
}: Props) => {
  const linkVariant = linkVariants[variant];
  const fontSize = fontSizes[size];

  const linkBody = (
    <div className="flex items-center gap-2">
      {iconLeft}
      {children}
      {iconRight}
    </div>
  );

  return isExternal ? (
    <a
      href={href}
      className={mergeClsx([linkVariant, fontSize, className])}
      {...props}
    >
      {linkBody}
    </a>
  ) : (
    <NextLink
      href={href}
      className={mergeClsx([linkVariant, fontSize, className])}
      {...props}
    >
      {linkBody}
    </NextLink>
  );
};