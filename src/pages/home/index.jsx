import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { CgProfile } from "react-icons/cg";
import { MdQuiz } from "react-icons/md";
import { Header } from "../../components/Header";

import { useLogin } from "../../contexts/useLoginRegister";
import styles from "./styles.module.scss";
import { api } from "../api/hello";

export default function Home() {
  const { user, setUser } = useLogin();
  const router = useRouter();
  useEffect(() => {
    async function authHome() {
      const { ["quizz.user"]: user } = parseCookies();

      if (!user) {
        router.push("/");
        toast.error("Desculpe não conseguimos achar o usuario logado 😴");
      }
      if (user) {
        toast.success("Seja bem Vindo ao Quizz 🔥");
        const seila = await api.get("/user/isadmin", user);
        if (seila.status === 200) {
          setUser(seila.data.data);
        }
      }
    }
    authHome();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header user={user} />
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
