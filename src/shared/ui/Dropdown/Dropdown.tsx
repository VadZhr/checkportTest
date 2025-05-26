import { useState, type FC, type ReactElement } from "react";

import * as Select from "@radix-ui/react-select";

import classes from "@/shared/ui/Dropdown/Dropdown.module.scss";

import type { IDropdownProps } from "@/shared/ui/Dropdown/model/types";
import { primaryColor, secondaryColor } from "./model/constants";

export const Dropdown: FC<IDropdownProps> = ({
  options,
  placeholder = "Выбрать...",
  value,
  onChange,
  label,
  width = 250,
  fontSize = 16,
}): ReactElement => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.customSelect} style={{ minWidth: width }}>
      {label && <label className={classes.labelText}>{label}</label>}
      <Select.Root
        value={value}
        onValueChange={onChange}
        onOpenChange={setIsOpened}
      >
        <Select.Trigger asChild>
          <div className={classes.selectTrigger}>
            <span
              className={classes.selectTriggerText}
              style={{
                color: value ? primaryColor : secondaryColor,
                fontSize: fontSize,
              }}
            >
              <Select.Value placeholder={placeholder} />
            </span>
            <Select.Icon className={classes.selectIcon}>
              <span
                style={{
                  transform: isOpened ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                v
              </span>
            </Select.Icon>
          </div>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={classes.selectContent}
            position="popper"
            sideOffset={4}
          >
            <Select.Viewport className={classes.selectedViewport}>
              {options.map((option) => (
                <Select.Item
                  key={option.id}
                  value={String(option.id)}
                  className={classes.selectItem}
                >
                  <Select.ItemText>{option.name}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
