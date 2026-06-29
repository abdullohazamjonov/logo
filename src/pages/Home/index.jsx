import Header from "../../comonents/header";
import Hero from "../../comonents/hero";
import Sidebar from "../../comonents/Sidebar"
import Input from "../../comonents/Input"
import Card from "../../comonents/Card"
import Test from "../../comonents/Test"
import Footer from "../../comonents/Footer"
import body from "../../assets/image/body.png";
import footer from "../../assets/image/footer.png";

export default function Home() {
    return (
        <div>
            <div className="min-h-screen bg-cover" style={{ backgroundImage:`url(${body})`}}>
                <Header/>
                <Hero/>
                <Sidebar />
                <Input />
                <Card />
                <Test />
            </div>
            <div className="bg-cover" style={{ backgroundImage:`url(${footer})`}}>
                <Footer />
            </div>
        </div>
    );
}