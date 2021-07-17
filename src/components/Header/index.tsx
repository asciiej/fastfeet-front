import { ReactNode, ReactElement } from 'react';

type Props = {
  children: ReactNode;
};

export function Header({ children }: Props): ReactElement {
  return <header>{children}</header>;
}
