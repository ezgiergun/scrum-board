import type { SVGProps } from 'react';

interface SvgProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string | number;
  height?: string | number;
}
export type { SvgProps };
