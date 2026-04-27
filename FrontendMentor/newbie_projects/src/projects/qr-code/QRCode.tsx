import { Footer } from "../../GeneralComponents"
import QRCODE from "../../assets/QRCode/images/image-qr-code.png"

function QRCode () {

    
    return (
    <div className='flex items-center justify-center min-h-screen bg-[hsl(212,45%,89%)]'>
        <section className='rounded-2xl border-solid border-2 border-green-300 w-[90%] h-[500px] flex items-center justify-center bg-[hsl(0,0%,100%)]'>
            
            <div className='border-solid border-2 border-pink-300 rounded-2xl w-[95%] flex flex-col'>
                
                <header className='mb-16'>
                    <img
                        className='rounded-lg' 
                        src={QRCODE} 
                        alt="qr code to front end mentor challenge link" />
                </header>
                <section className='font-outfit'>
                    <h3 className='font-bold'>Improve your front-end skills by building projects</h3>
                    <p className='font-light'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </section>
            </div>
        
        </section>
        {/* <Footer url ={"https://www.frontendmentor.io?ref=challenge"} /> */}
    </div>
    )
}

export default QRCode