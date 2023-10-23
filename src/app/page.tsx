import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";

export default function Home() {
  return (
    <main>
      <div className="flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <Title />
        </div>
        <Footer />
      </div>
    </main>
  );
}
