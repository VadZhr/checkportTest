import type { FC, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "@/app/store/store";

interface IReduxProviderProps {
  children: ReactNode;
}

export const ReduxProvider: FC<IReduxProviderProps> = ({
  children,
}): ReactElement => <Provider store={store}>{children}</Provider>;
