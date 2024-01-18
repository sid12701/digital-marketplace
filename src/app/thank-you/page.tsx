import Image from "next/image";

const ThankYouPage = () => {
    return <main className="relative lg:min-h-full">
        <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
            <Image fill src='/checkout-thank-you.jpg' alt="thank you" />
        </div >
        
        <div className="">
            
        </div>
    </main>
}

export default ThankYouPage;