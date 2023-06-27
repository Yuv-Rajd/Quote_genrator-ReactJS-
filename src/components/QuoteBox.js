function QuoteBox(props) {
    return (
        <div className="w-50 h-25 border border-dark rounded p-3">
            <p>{props.quote}</p>
            {props.Auth == null ? <h3 className="text-end"> -Anonymous</h3> :   <h3 className="text-end">-{props.Auth}</h3>}
        </div>
    );
}
export default QuoteBox;