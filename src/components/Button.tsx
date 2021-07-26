type ButtonProps = {
    // esse ? me parece deixar opcional o uso, talvez por fazer uma validacao
    children?: string,
    disabled: boolean,
}

const Button = (props: ButtonProps) => {
    return (
        props.disabled ? (
            <button disabled>{props.children}</button>
            ) : (
            <button>{props.children}</button>
        )
    );
}

export default Button;