import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../ui/Navbar/layout";
import CharacterHeader from "@/ui/CharacterHeader/CharacterHeader";
import CharacterDescription from "@/ui/CharacterDescription/CharacterDescription";
import CharactersSlider from "@/ui/CharactersSlider/CharactersSlider";

const inter = Inter({ subsets: ["latin"] });

const characterNameSlug = "iron%20man";
const baseURL = process.env.MARVEL_API_BASER_URL;
const publicKey = process.env.MARVEL_API_PUBLIC_KEY;
const hash = process.env.MARVEL_API_HASH;

const comicsLimit = 10;
export async function getServerSideProps() {
  const URL = `${baseURL}?name=${characterNameSlug}&ts=1&apikey=${publicKey}&hash=${hash}`;

  const response = await fetch(URL, {
    method: "GET",
  });
  const data = await response.json();
  const comicsCollectionURI = data.data?.results[0]?.comics.collectionURI;

  const comicsUrl = `${comicsCollectionURI}?ts=1&limit=${comicsLimit}&apikey=${publicKey}&hash=${hash}`;

  const comicsRes = await fetch(comicsUrl, {
    method: "GET",
  });
  const comicsData = await comicsRes.json();

  return { props: comicsData };
}

export default function Home(props) {
  return (
    <main className="flex flex-col min-h-screen ">
      <Navbar />
      <CharacterHeader />
      <CharacterDescription />

      <CharactersSlider data={props.data} />
      <Head>
        <title>Iron Man App</title>
      </Head>
    </main>
  );
}
