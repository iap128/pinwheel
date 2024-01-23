import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface CardProps {
  title: string;
  value: string | number | undefined;
  suffix: string;
  icon: IconDefinition;
  tooltip?: string;
  hasExtras?: ExtrasProps[];
}

export interface ExtrasProps {
  label: string;
  value: string | number | undefined;
  icon: IconDefinition;
}