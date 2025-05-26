import type { icons } from "@/shared/models/globalEntities";
import type { ButtonProps } from "@radix-ui/themes";

interface ICheckPortButtonProps extends ButtonProps {
    active?: boolean;
    icon?: icons;
}

export type { ICheckPortButtonProps };
