import type { activeProperty } from "@/shared/api/data-models/filials";
import type { IBaseEntity } from "@/shared/models/globalEntities";

interface IDropdownProps {
    options: IBaseEntity[];
    value?: string;
    placeholder?: string;
    label?: string;
    width?: number;
    fontSize?: number;
    onChange?: (value: activeProperty | string ) => void;
}

export type { IDropdownProps };
