import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On Change Fired");
        setText(event.target.value);
    }

    const countWords = () => {
        return (text.split(" ").length - 1);
    }

    const [text, setText] = useState("")

    return (
        <>
            <div className="container my-5">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 rounded-pill" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-2 rounded-pill" onClick={handleLoClick}>lowercase</button>
                <button className="btn btn-primary mx-2 rounded-pill" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3">
                <h3>Word Summary</h3>
                <p>{countWords()} words {text.length} characters</p>
                <p>{0.008 * countWords()} minutes read</p>
                <h3 className="my-2">Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Enter text below...'
}