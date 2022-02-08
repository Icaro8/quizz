import React, { useState, useRef, useEffect } from "react";
import * as yup from "yup";
import { Form } from "@unform/web";

import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineUserAdd,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Head from "next/head";
import { RiLockPasswordFill, RiUserAddLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

import styles from "./style.module.scss";

import { toast } from "react-toastify";

import { api } from "../../api/hello";
import { Input } from "../../../components/InputComponent";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().min(5).required(),
  password: yup.string().min(4).required(),
});

export default function CreateUser() {
  const router = useRouter();
  const formRef = useRef();
  const [inputType, setInputType] = useState("password");

  useEffect(() => {
    async function authAdmin() {
      const { ["quizz.user"]: cookie } = parseCookies();
      if (!cookie) router.push("/");
      const response = await api.get("user/isadmin", cookie);
      if (response.data.data === false || response.status >= 400)
        router.push("/");
    }
    authAdmin();
  }, []);

  function handleSateInput() {
    if (inputType === "password") setInputType("text");
    if (inputType === "text") setInputType("password");
  }
  async function handleSubmit(data) {
    schema.isValid(data).then((isValid) => {
      async function createNewUser() {
        const response = await api.post("users", data);
        if (response.status === 400) {
          toast.error("tivemos um problema por favor tente novamente");
        }
        console.log(response);
        if (response.status === 200)
          toast.success("usuario criado com sucesso");
      }
      if (isValid) createNewUser();
      else toast.error("Os campos São Obrigatórios");
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create User</title>
      </Head>
      <div className={styles.formContainer}>
        <h2>Register new user</h2>
        <div className={styles.userAddSvg}>
          <RiUserAddLine />
        </div>
        <main>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <AiOutlineUserAdd />
              <Input name="name" type="text" placeholder="Email" required />
            </div>
            <div className={styles.input}>
              <MdAlternateEmail />
              <Input name="email" type="email" placeholder="Email" required />
            </div>
            <div className={styles.input}>
              <RiLockPasswordFill />
              <Input
                name="password"
                type={inputType}
                placeholder="Password"
                required
              />
              {inputType === "password" ? (
                <AiFillEye onClick={handleSateInput} className={styles.eye} />
              ) : (
                <AiFillEyeInvisible
                  onClick={handleSateInput}
                  className={styles.eye}
                />
              )}
            </div>
            <div className={styles.btn}>
              <button
                type="button"
                className={styles.back}
                onClick={() => router.push("/admin")}
              >
                <AiOutlineArrowLeft />
                voltar
              </button>
              <button type="submit">Create new user</button>
            </div>
          </Form>
        </main>
      </div>
    </div>
  );
}
