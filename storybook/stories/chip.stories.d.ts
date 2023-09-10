import { StoryObj } from '@storybook/react';
import { Chip } from '../components/chip';
declare const meta: {
    title: string;
    component: typeof Chip;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const All: Story;
export declare const WithIcon: Story;
