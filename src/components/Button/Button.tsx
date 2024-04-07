import classes from "./Button.module.css";

interface ButtonProps {
    children: React.ReactElement | React.ReactElement[] | string;
    isActive?: boolean;
    onClick: Function;
    style?: React.CSSProperties;
    disabled?: boolean;
}

export default function Button({
    children,
    isActive,
    onClick,
    style,
    disabled = false,
}: ButtonProps) {
    return (
        <button
            onClick={() => onClick()}
            style={style}
            disabled={disabled}
            className={
                isActive
                    ? `${classes.button} ${classes.active}`
                    : classes.button
            }
        >
            {children}
        </button>
    );
}
