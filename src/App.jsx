import HeaderBanner from "./Layout/Headers/HeaderBanner";
import Categories from "./Layout/Sections/Categories";
import Main from "./Layout/Main"
import Navbar from "./Layout/Navbar/Navbar"
import Footer from "./Layout/Footer";
import Recommended from "./Layout/Sections/Recommended";



export default function App() {

    return (
        <div className="w-full pt-10 md:pt-24 md:pb-0 bg-blue-gray">
            <Navbar />
            <HeaderBanner />
            <Main>
                <Recommended />
                <Categories />
            </Main>
            <Footer />
        </div>
    );
}
