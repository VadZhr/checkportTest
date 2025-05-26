interface IPaginationProps {
    maxPages: number;
    currentPage: number;
    onClickLeft: () => void;
    onClickRight: () => void;
    onClick: (value: number) => void;
}

export type {
    IPaginationProps,
}
