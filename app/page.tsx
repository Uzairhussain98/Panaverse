import Image from "next/image";
import { Inter } from "@next/font/google";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Earn from "./components/Earn";
import Students from "./components/Students";
import Programs from "./components/Programs";
import Test from "./components/Test";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Container />
      <Earn />
      <Students />
      <Programs />
      <Test />
      <Footer />
    </div>
  );
}
