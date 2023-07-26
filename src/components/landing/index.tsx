import Page from "../template/Page";
import Evidence from "./evidence";
import Footer from "./footer";
import Header from "./header";

export default function LandingPage() {
    return (
        <Page external>
            <Header />
            <Evidence />
            <Footer />
        </Page>
    )
}