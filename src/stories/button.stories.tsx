import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button';

import { Camera, Code2, Loader } from 'lucide-react';
import { HStack, VStack } from './stack';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본',
  args: {
    children: 'Metamong',
  },
};

export const IconDefault: Story = {
  name: '아이콘 기본',
  args: {
    variants: {
      type: 'icon',
    },
    children: <Camera size={12} />,
  },
};

export const All: Story = {
  name: '모두',
  render: () => (
    <VStack>
      <HStack>
        <Button>Metamong</Button>
        <Button variants={{ color: 'white' }}>Metamong</Button>
        <Button variants={{ color: 'gray' }}>Metamong</Button>
        <Button variants={{ color: 'error' }}>Metamong</Button>
      </HStack>
      <HStack>
        <Button>Metamong</Button>
        <Button variants={{ color: 'white', border: true }}>Metamong</Button>
        <Button variants={{ color: 'gray', border: true }}>Metamong</Button>
        <Button variants={{ color: 'error', border: true }}>Metamong</Button>
      </HStack>
      <HStack>
        <Button>Metamong</Button>
        <Button variants={{ borderRadius: 'md' }}>Metamong</Button>
        <Button variants={{ borderRadius: 'lg' }}>Metamong</Button>
      </HStack>
      <HStack>
        <Button variants={{ type: 'icon' }}>
          <Camera size={12} />
        </Button>
        <Button variants={{ type: 'icon', color: 'gray' }}>
          <Camera size={12} />
        </Button>
        <Button variants={{ type: 'icon', color: 'error' }}>
          <Camera size={12} />
        </Button>
      </HStack>
      <HStack>
        <Button variants={{ type: 'icon', borderRadius: 'circle' }}>
          <Camera size={12} />
        </Button>
        <Button
          variants={{ type: 'icon', color: 'gray', borderRadius: 'circle' }}
        >
          <Camera size={12} />
        </Button>
        <Button
          variants={{ type: 'icon', color: 'error', borderRadius: 'circle' }}
        >
          <Camera size={12} />
        </Button>
      </HStack>
    </VStack>
  ),
};

export const WithIcon: Story = {
  name: '아이콘과 함께',
  render: () => (
    <HStack>
      <Button>
        <Camera size={12} />
        Metamong
      </Button>
      <Button>
        Metamong
        <Camera size={12} />
      </Button>
      <Button>
        <Camera size={12} />
        Metamong
        <Code2 size={12} />
      </Button>
      <Button>
        <Camera size={12} />
        Metamong
        <Code2 size={12} />
        <Code2 size={12} />
      </Button>
    </HStack>
  ),
};

export const Disabled: Story = {
  name: '비활성화',
  render: () => (
    <VStack>
      <HStack>
        <Button>Metamong</Button>
        <Button variants={{ color: 'white' }}>Metamong</Button>
        <Button variants={{ color: 'gray' }}>Metamong</Button>
        <Button variants={{ color: 'error' }}>Metamong</Button>
      </HStack>
      <HStack>
        <Button disabled>Metamong</Button>
        <Button variants={{ color: 'white' }} disabled>
          Metamong
        </Button>
        <Button variants={{ color: 'gray' }} disabled>
          Metamong
        </Button>
        <Button variants={{ color: 'error' }} disabled>
          Metamong
        </Button>
      </HStack>
      <HStack>
        <Button disabled>
          Metamong
          <Loader size={12} />
        </Button>
        <Button variants={{ color: 'white' }} disabled>
          Metamong
          <Loader size={12} />
        </Button>
        <Button variants={{ color: 'gray' }} disabled>
          Metamong
          <Loader size={12} />
        </Button>
        <Button variants={{ color: 'error' }} disabled>
          Metamong
          <Loader size={12} />
        </Button>
      </HStack>
    </VStack>
  ),
};
