import Header from "./_componenets/header";
import Hero from "./_componenets/hero";
import Shorten from "./_componenets/shorten";
import Stats from "./_componenets/stats";
import Boost from "./_componenets/boost";
import Footer from "./_componenets/footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-gray">
        <Shorten />
        <Stats />
        <Boost />
        <Footer />
      </main>
    </>
  );
}
