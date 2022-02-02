import React, { useEffect } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";
import jwt_decode from "jwt-decode";

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

export function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  // const parse = jwt_decode(cookies);
  if (cookies.admin) {
  }
  return {
    props: {},
  };
}
