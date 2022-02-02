import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { CgProfile } from "react-icons/cg";
import { MdQuiz } from "react-icons/md";
import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const { ["quizz.user"]: user } = parseCookies();
    if (!user) {
      router.push("/");
      toast.error("Desculpe não conseguimos achar o usuario logado 😴");
    }
    if (user) {
      toast.success("Seja bem Vindo ao Quizz 🔥");
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <h1 className={styles.title}>Olá Bem Vindo ao Quizz</h1>
      <div className={styles.containerCard}>
        <Link href="/profile">
          <div className={styles.modal}>
            <CgProfile />
            <p>Perfil</p>
          </div>
        </Link>
        <Link href="/quizz">
          <div className={styles.modal}>
            <MdQuiz />
            <p>Quizz</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
