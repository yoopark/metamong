import { chip, type ChipVariants } from './chip.css';

interface ChipProps extends React.PropsWithChildren {
  variants?: ChipVariants;
}

export default function Chip({ variants, children }: ChipProps) {
  return <span className={chip(variants)}>{children}</span>;
}
