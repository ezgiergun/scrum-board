import type React from 'react';

export interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}
