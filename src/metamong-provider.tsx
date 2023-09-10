import '@/styles/global.css';
import '@/styles/theme.css';

interface MetamongProviderProps extends React.PropsWithChildren {}

export default function MetamongProvider({ children }: MetamongProviderProps) {
  return <>{children}</>;
}
