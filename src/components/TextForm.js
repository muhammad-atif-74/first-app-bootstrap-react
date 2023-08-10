import React, { useState } from 'react'


function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpperClick = () => {
        let myText = text;
        let toUpper = myText.toUpperCase();
        setText(toUpper)
        props.showAlert('Text converted to Uppercase','success')
    }
    const handleUpperChange = (event) => {
        setText(event.target.value)
        // alert("Change")
    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

    }
    const handleCopyText = () => {
        window.navigator.clipboard.writeText(text)
        props.showAlert('Text Copied Successfully','success')

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra spaces removed','success')
    }

    return (
        <div>
            <div className="container my-4 text-start" style={{color: `${props.mode=='dark'?'white':'black'}`}}>
                <h3>{props.heading}</h3>
                <div className="form-group">
                    <label htmlFor="input">Input Your Text</label>
                    <textarea name="" id="" cols="30" rows="10" value={text} onChange={handleUpperChange} className="form-control my-2" style={{color: `${props.mode=='dark' ?'white':'black'}`, backgroundColor: `${props.mode=='dark' ?props.theme.dark:'white'}`}}></textarea>
                    <button className='btn btn-primary my-2' onClick={handleUpperClick}>Convert To Uppercase</button>
                    <button className="btn btn-warning mx-2 my-2" onClick={handleSpeak} >Speak</button>
                    <button className="btn btn-info mx-2 my-2" onClick={handleCopyText} >Copy Text</button>
                    <button className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                </div>
            </div>

            <div className="container my-3 card" style={{color: `${props.mode=='dark' ?'white':'black'}`, backgroundColor: `${props.mode=='dark' ?props.theme.dark:'white'}`}}>
                <div className="card-header">
                    <h3>Text Summary</h3>
                </div>
                <div className="card-body">
                    <div className="prev">
                        <h3>Preview</h3>
                        <p>{text.length>0?text:'Enter Text in above input to preview it'}</p>
                    </div>
                    <ul>
                        <li>Total Words: {(text.split(" ").length) - 1}</li>
                        <li>Total Characters: {text.length}</li>
                        <li>Minutes Read: {((text.split(" ").length) - 1) * 0.008}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TextForm