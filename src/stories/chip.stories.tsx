import { Meta, StoryObj } from '@storybook/react';
import { Camera, Code2 } from 'lucide-react';

import { Chip } from '@/components/chip';

import { HStack, VStack } from './stack';

const meta = {
  title: 'Components/Chip',
  component: Chip,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본',
  args: {
    children: 'Metamong',
  },
};

export const All: Story = {
  name: '모두',
  render: () => (
    <VStack>
      <HStack>
        <Chip>Metamong</Chip>
        <Chip variants={{ color: 'white' }}>Metamong</Chip>
        <Chip variants={{ color: 'gray' }}>Metamong</Chip>
        <Chip variants={{ color: 'error' }}>Metamong</Chip>
      </HStack>
      <HStack>
        <Chip variants={{ color: 'white', border: true }}>Metamong</Chip>
        <Chip variants={{ color: 'gray', border: true }}>Metamong</Chip>
        <Chip variants={{ color: 'error', border: true }}>Metamong</Chip>
      </HStack>
      <HStack>
        <Chip variants={{ borderRadius: 'none' }}>Metamong</Chip>
        <Chip variants={{ borderRadius: 'sm' }}>Metamong</Chip>
        <Chip variants={{ borderRadius: 'md' }}>Metamong</Chip>
      </HStack>
    </VStack>
  ),
};

export const WithIcon: Story = {
  name: '아이콘과 함께',
  render: () => (
    <HStack>
      <Chip>
        <Camera size={12} />
        Metamong
      </Chip>
      <Chip>
        Metamong
        <Camera size={12} />
      </Chip>
      <Chip>
        <Camera size={12} />
        Metamong
        <Code2 size={12} />
      </Chip>
    </HStack>
  ),
};
