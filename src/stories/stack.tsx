interface StackProps extends React.PropsWithChildren {}

export function HStack({ children }: StackProps) {
  return <div style={{ display: 'flex', gap: '4px' }}>{children}</div>;
}

export function VStack({ children }: StackProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {children}
    </div>
  );
}
