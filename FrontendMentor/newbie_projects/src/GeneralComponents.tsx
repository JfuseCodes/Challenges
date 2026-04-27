const footerStyling = {
        fontSize: "0.6875rem",
        textAlign: "center"
    } as const;

    const a_Styling = {
        color: "hsl(228, 45%, 44%)"
    } as const;
interface Footer {

}
const Footer = ({url}: {url:string}) => {

    return (
        <footer style={footerStyling} className="attribution">
            Challenge by <a style={a_Styling}  href={url}>Frontend Mentor</a>. 
            Coded by <a style={a_Styling} href="#">JfuseCodes</a>.
        </footer>
    )
}

export {Footer}

