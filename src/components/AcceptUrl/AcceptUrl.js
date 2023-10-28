import '../AcceptUrl/AcceptUrl.css'

function AcceptUrl({url,onUrlChange,onShortUrl}){

    return (
        <>
            <section className="url_container">
                <div className="input_container">
                <input  type="text" id="url" name="url" onChange={(event)=>onUrlChange(event.target.value)} value={url} />
                </div>
                <button className='btn' onClick={()=>onShortUrl()}>Short Url</button>
            </section>
        </>
    )
}
export default AcceptUrl;