import React, { useEffect } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import jwt_decode from "jwt-decode";

import { api } from "../../pages/api/hello";
import { LeftBar } from "./components/LeftBar";
import { Header } from "../../components/Header";
import { TableScore } from "../../components/ScoreUsers";

import style from "./style.module.scss";

export default function ScorePage() {
  return (
    <div className={style.layoutGrid}>
      <Head>
        <title>Admin</title>
      </Head>
      <Header />
      <div className={style.row}>
        <div className={style.navigation}>
          <LeftBar />
        </div>
        <div className={style.table}>
          <h2>Score Players</h2>
          <TableScore name="Icaro" points="6" situation={8} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { ["quizz.user"]: cookie } = parseCookies(ctx);

  if (!cookie) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: {},
    };
  }

  const response = await fetch("http://localhost:3333/user/isadmin", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  });
  const convert = await response.json();

  if (convert.data === false || response.status >= 400) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: {},
    };
  }
  return {
    props: {},
  };
}
