import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { FaFantasyFlightGames } from "react-icons/fa";

import styles from "./style.module.scss";

export function Header({ user }) {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);
  return (
    <header className={styles.headerContainer}>
      <div>
        <div>
          <FaFantasyFlightGames />
        </div>
        <div>
          <h1>Quizz Game</h1>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/quizz">
              <a>Quiz</a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a className={pathname === "/home" ? styles.active : ""}>Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a>{user ? "Painel de controle" : ""}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
