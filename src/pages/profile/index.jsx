import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";

import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

export default function Profile() {
  const router = useRouter();
  const count = 4;

  function handleBackHistory() {
    router.push("/home");
  }
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.containericon}>
          <CgProfile />
        </div>
        <div className={styles.content}>
          <h1>Icaro</h1>
          <strong>teste@teste.com</strong>
          <div>
            <span>{count}</span>
            <AiFillStar
              color={
                count < 5
                  ? "#9B2C2C"
                  : count < 7
                  ? "#F6E05E"
                  : count > 7
                  ? "#38A169"
                  : ""
              }
            />
          </div>
          <button onClick={handleBackHistory}>
            <BsArrowLeftShort /> Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
