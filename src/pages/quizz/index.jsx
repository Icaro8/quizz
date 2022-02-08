import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import { VscDebugStart } from "react-icons/vsc";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

import { Header } from "../../components/Header";
import { api } from "../api/hello";
import styles from "./style.module.scss";

import "react-toastify/dist/ReactToastify.css";

export default function QuizUser() {
  const router = useRouter();
  const [errorResponse, seterrorResponse] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [runtimeFinish, setHuntimeFinsih] = useState(false);
  const [hits, setHits] = useState(0);
  const [counterQuestion, setCounterQuestion] = useState(0);
  const [sliceQUestion, setSliceQuestion] = useState(1);
  const [increaseCounter, setIncreaseCounter] = useState(1);

  useEffect(
    () => {
      const { ["quizz.user"]: user } = parseCookies();
      if (!user) {
        router.push("/");
        toast.error("Desculpe não conseguimos achar o usuario logado 😴");
      }
      async function pickUpQuestions() {
        const response = await api.get("users/perguntas-all");
        if (response.status === 200) {
          setQuestions(response.data);
        }
      }
      pickUpQuestions();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  function handleQuestion() {
    setQuestion(questions.slice(counterQuestion, sliceQUestion));
    seterrorResponse(false);
  }

  function handleResponse(response, userResponse) {
    if (response === userResponse) {
      setHits(hits + 1);
      setIncreaseCounter(increaseCounter + 1);
      const nextQuestion = counterQuestion + sliceQUestion;
      const newSlice = nextQuestion + sliceQUestion;
      setQuestion(questions.slice(nextQuestion, newSlice));
      if (newSlice >= questions.length) toast.warning("Fim das questões");
    }
    if (response !== userResponse) {
      const nextQuestion = counterQuestion + sliceQUestion;
      const newSlice = nextQuestion + sliceQUestion;
      setQuestion(questions.slice(nextQuestion, newSlice));
      setIncreaseCounter(increaseCounter + 1);
      if (newSlice >= questions.length) toast.warning("Fim das questões");
    }
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>Quizz</title>
      </Head>
      <Header />
      <div className={styles.Container}>
        <div className={styles.card}>
          <h1 className={styles.hits}>
            {increaseCounter}/{questions.length}
          </h1>
          {errorResponse ? (
            <div className={styles.containerLoading}>
              <div className={styles.loading}></div>

              <button onClick={handleQuestion}>
                Iniciar
                <VscDebugStart />
              </button>
            </div>
          ) : (
            <div
              className={
                increaseCounter >= questions.length
                  ? styles.none
                  : styles.containerQuestion
              }
            >
              {question.map((element) => {
                return (
                  <div key={element.title} className={styles.Questions}>
                    <div className={styles.question}>
                      <div>
                        <h3>{element.title}</h3>
                      </div>
                      <div className={styles.responses}>
                        <div>
                          <span>A)</span>
                          <button
                            onClick={() =>
                              handleResponse(
                                element.alternativas.resposta.resposta,
                                element.alternativas.alternativa_a
                              )
                            }
                          >
                            {element.alternativas.alternativa_a}
                          </button>
                        </div>
                        <div>
                          <span>B)</span>
                          <button
                            onClick={() =>
                              handleResponse(
                                element.alternativas.resposta.resposta,
                                element.alternativas.alternativa_b
                              )
                            }
                          >
                            {element.alternativas.alternativa_b}
                          </button>
                        </div>
                        <div>
                          <span>C)</span>
                          <button
                            onClick={() =>
                              handleResponse(
                                element.alternativas.resposta.resposta,
                                element.alternativas.alternativa_c
                              )
                            }
                          >
                            {element.alternativas.alternativa_c}
                          </button>
                        </div>
                        <div>
                          <span>D)</span>
                          <button
                            onClick={() =>
                              handleResponse(
                                element.alternativas.resposta.resposta,
                                element.alternativas.alternativa_d
                              )
                            }
                          >
                            {element.alternativas.alternativa_d}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {increaseCounter >= questions.length ? (
            <button className={styles.send}>Enviar Respostas</button>
          ) : (
            ""
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
/*
  className={styles.finish}
  className={styles.response}
  className={styles.title}
  className={styles.contentCard}
*/
/*
  <div className={styles.Questions} key={element.title}>
                  <div>
                    <h3>{element[counterQuestion]?.title}</h3>
                  </div>
                  <div>
                    <button>
                      {element[counterQuestion]?.alternativas?.alternativa_a}
                    </button>
                    <button>
                      {element[counterQuestion]?.alternativas?.alternativa_b}
                    </button>
                    <button>
                      {element[counterQuestion]?.alternativas?.alternativa_c}
                    </button>
                    <button>
                      {element[counterQuestion]?.alternativas?.alternativa_d}
                    </button>
                  </div>
                </div>
*/
