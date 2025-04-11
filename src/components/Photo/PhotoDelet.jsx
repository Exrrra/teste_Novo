import React from "react";
import styles from "./PhotoDelet.module.css";
import { PHOTO_DELET } from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelet = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELET(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelet;
