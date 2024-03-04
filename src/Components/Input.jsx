

const Input = (props) => {
    return (

        <div className="w-100">
            <label id='Label-A cl' className="d-flex flex-column border-0 shadow-none  w-100  label-font-responsive light-text-color leftPlaceholder m-0 p-0" >

                <div className=" pb-2 text-end px-4 fw-bold dark-text-color ">{props.label}</div>

                <div id="inputContainer" className={`styled-inputB bg-third-light  d-flex w-100 px-3 align-items-center
                 justify-content-start py-sm-2 py-1  lightsuccess`}>
                    <div className="d-flex align-items-center pb-1">{props.icon}</div>

                    <input type={props.type} value={props.value} onChange={props.onChange} className="px-2 w-100 d-flex align-items-center bg-third-light  m-0 h-auto custome-input-border" />

                </div>
            </label>
            <div className="text-danger validation-container w-100 d-flex justify-content-start px-3 pt-1 overflow-auto font-small"></div>
        </div>
    );

}
export default Input;



