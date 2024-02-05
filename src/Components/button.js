

const Button = (props) => {

    return (

        <button onClick={props.onClick} type={props.type} className={`w-100 ${props.backgroundColor} font-msmall  rounded-4 d-flex 
            flex-row align-items-center justify-content-center`}>{props.label}</button>
    );
}

export default Button;

