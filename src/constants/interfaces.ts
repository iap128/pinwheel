import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface CardProps {
  title: string;
  value: string | number | undefined;
  suffix: string;
  icon: IconDefinition;
  tooltip?: string;
  hasGraph?: GraphProps;
}

export interface GraphProps {
  dataKey: string;
  type1Hr: string;
  type12Hr: string;
  type24Hr: string;
}