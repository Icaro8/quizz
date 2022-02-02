import React from "react";
import Head from "next/head";

import { Header } from "../../components/Header";

export default function Home({ news: resp }) {
  console.log(resp);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div>
        <h1>Olá Bem Vindo ao Game Quizz</h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const news = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-01-01&sortBy=publishedAt&apiKey=45602c3e04d548469c2c8052436c414b"
  );
  const resp = await news.json();
  const fnl = resp;
  return {
    props: { news: fnl },
  };
}
