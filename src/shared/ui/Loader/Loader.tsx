import type { FC, ReactElement } from "react";

import { Spinner, type SpinnerProps } from "@radix-ui/themes";

export const Loader: FC<SpinnerProps> = ({ size = '3' }): ReactElement => {
    return <Spinner size={size}/>;
};
