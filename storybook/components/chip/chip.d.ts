/// <reference types="react" />
import { type ChipVariants } from './chip.css';
interface ChipProps extends React.PropsWithChildren {
    variants?: ChipVariants;
}
export default function Chip({ variants, children }: ChipProps): import("react/jsx-runtime").JSX.Element;
export {};
