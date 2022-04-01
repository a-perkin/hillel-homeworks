export default function NewButton(props) {
    return (
        <button onClick={props.onButtonClick} style={props.style}> {props.title}</button>
    );
}
