import HeaderBanner from "./Layout/Headers/HeaderBanner";
import Categories from "./Layout/Sections/Categories";
import Main from "./Layout/Main"
import Navbar from "./Layout/Navbar"
import Footer from "./Layout/Footer";
import Recommended from "./Layout/Sections/Recommended";
export default function App() {
    return (
        <div className="w-full pt-24 md:pb-0 bg-blue-gray">
            <HeaderBanner />
            <Navbar />
            <Main>
                <Recommended />
                <Categories />
            </Main>
            <Footer />
        </div>
    );
}
