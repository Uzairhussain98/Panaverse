import Image from "next/image";
import { Inter } from "@next/font/google";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Earn from "./components/Earn";
import Students from "./components/Students";
import Programs from "./components/Programs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Container />
      <Earn />
      <Students />
      <Programs />
    </>
  );
}
