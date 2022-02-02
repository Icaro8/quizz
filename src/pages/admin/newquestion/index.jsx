import React, { useRef } from "react";
import Head from "next/head";
import { Form } from "@unform/web";

import { Input } from "../../../components/InputComponent";
import { Header } from "../../../components/Header";
import { LeftBar } from "../components/LeftBar";
import { api } from "../../api/hello";

import styles from "./style.module.scss";

export default function CreateNewQuestion() {
  const formRef = useRef();

  async function hendleSubmit({
    title,
    categoria,
    alternativa_a,
    alternativa_b,
    alternativa_c,
    alternativa_d,
    resposta_title,
  }) {
    const question = {
      title: title,
      categoria: categoria,
      alternativa_a: alternativa_a,
      alternativa_b: alternativa_b,
      alternativa_c: alternativa_c,
      alternativa_d: alternativa_d,
      resposta_title: resposta_title,
    };
    question.resposta_title = alternativa_d;

    const response = await api.post("users/pergunta", question);
    console.log(question);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create new question</title>
      </Head>
      <Header />
      <div className={styles.row}>
        <div className={styles.LeftBar}>
          <LeftBar />
        </div>
        <Form ref={formRef} onSubmit={hendleSubmit} className={styles.form}>
          <h1>Criar novos Quizz</h1>
          <div className={styles.text}>
            <h3>Enunciado da questão</h3>
            <Input name="title" type="text" className={styles.input} />
          </div>
          <div className={styles.text}>
            <strong>Categoria</strong>
            <Input name="categoria" type="text" className={styles.input} />
          </div>
          <div>
            <div className={styles.inputGroup}>
              <strong>Alternativa</strong>
              <Input name="alternativa_a" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <strong>Alternativa</strong>
              <Input name="alternativa_b" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <strong>Alternativa</strong>
              <Input name="alternativa_c" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <strong>Resposta</strong>
              <Input name="alternativa_d" type="text" />
            </div>

            <button type="submit">submit</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
