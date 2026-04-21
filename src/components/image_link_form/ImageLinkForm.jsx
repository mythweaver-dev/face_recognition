import './ImageLinkForm.css'
const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return(
        <div>
            <p className="text-2xl">
                {"This Magic Brain will detect faces in your pictures. Give it a try"}
            </p>
            <div className="center">
                <div className='form center p-8 rounded-md shadow-2xl'>
                    <input className=" text-xl p-2 w-[70%] mx-auto bg-white" type="text" onChange={onInputChange}/>
                    <button className="w-[30%] text-xl transition-transform hover:scale-105 inline-block no-underline px-4 py-2 bg-purple-400 text-white " onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm