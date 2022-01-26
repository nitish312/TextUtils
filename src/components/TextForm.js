import React, { useState } from 'react';

export default function (props) {
    const buttonUppercase = () => {
        // console.log("Uppercase button is clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const buttonLowercase = () => {
        // console.log("Lowercase button is clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const buttonClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Textbox is cleared!","success")
    }
    const buttonCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!","success")
    }
    const buttonExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed successfully!","success")
    }
    const handleOnChange = (event) => {
        // console.log("onChange" + text )
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // setText("updated text variable")
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#071c40'}}>
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#071c40'}} onChange={handleOnChange} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={buttonUppercase}>Uppercase</button>
                <button className="btn btn-primary " onClick={buttonLowercase}>Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={buttonClear}>Clear</button>
                <button className="btn btn-primary" onClick={buttonCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={buttonExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#071c40'}}>
                <h2>Your text summery</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text into the above box to preview it"}</p>
                {/* <div className="mb-3">
                    <textarea className="form-control" id="myBox2" value={text} onChange={handleOnChange} rows="6"></textarea>
                </div> */}
            </div>
        </>
    );
}
