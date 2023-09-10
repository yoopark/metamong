import type { StoryObj } from '@storybook/react';
import { Button } from '../components/button';
declare const meta: {
    title: string;
    component: typeof Button;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const IconDefault: Story;
export declare const All: Story;
export declare const WithIcon: Story;
export declare const Disabled: Story;
