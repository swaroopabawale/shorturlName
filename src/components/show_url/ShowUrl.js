import "../show_url/ShowUrl.css"
function ShowUrl({url}){

    return(
        <>
            <h4>Shorten Url :</h4>
            <div className="show_url">
                <span className="style_url">{url}</span>
            </div>
        </>
    )
}
export default ShowUrl;