import { useState } from "react";
import { useEffect } from "react";
import { TapeItem } from "../TapeItem/TapeItem";
import s from "./PhotoTape.module.css";

export const PhotoTape = () => {
  const [tape, setTape] = useState([]);

  useEffect(() => {
    const getTape = async () => {
      const req = await fetch(
        "https://webdev-hw-api.vercel.app/api/v1/prod/instapro"
      );
      const res = await req.json();
      setTape(res.posts)
    };
    getTape();
  }, []);

  

  return (
    <ul className={s.tape}>
      {tape.map((tape) => {
        return (
          <TapeItem
            key={tape.id}
            id={tape.id}
            tape={tape}
          />
        );
      })}
    </ul>
  );
};