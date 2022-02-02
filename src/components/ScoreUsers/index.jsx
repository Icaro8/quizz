import React from "react";

import { AiFillStar } from "react-icons/ai";

import styles from "./style.module.scss";

export function TableScore({ name, points, situation }) {
  return (
    <div className={styles.container}>
      <main>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
              <th>situation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{name}</strong>
              </td>
              <td>
                <strong>{points}</strong>
              </td>
              <td>
                {situation < 4 ? (
                  <AiFillStar color="#ff3d00" />
                ) : situation < 7 ? (
                  <AiFillStar color="#ffea00" />
                ) : situation >= 7 ? (
                  <AiFillStar color="#00e676" />
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
/*
   <td>Icaro Vieira</td>
              <td>5</td>
              <td>
                <AiFillStar />
              </td>
*/
