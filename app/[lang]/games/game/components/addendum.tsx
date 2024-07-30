"use client";
import { motion } from "framer-motion";

export default function Addendum(props: {
  id: string;
  val: number;
  handler: any;
  isAdded: boolean;
  drop: boolean;
  color: string;
}) {
  // let score = useContext(GameContext);
  // console.log(score);
  const variants = {
    added: { borderRadius: "100%", scale: 1.1 },
    neutral: { borderRadius: "20%", scale: 1 },
    drop: { display: "none" },
  };
  // const sm = (Number(props.edge) / 4).toString();
  // const md = (Number(props.edge) / 2).toString();
  const styles = "rounded " + props.color + " text-white w-full h-full"; // lg:h-"+props.edge+" lg:w-"+props.edge+" h-"+sm+" w-"+sm+" md:h-"+md+" md:w-"+md
  return (
    // <div id={props.id}>
    <motion.button
      key={props.id.toString()}
      className={`${styles}`}
      variants={variants}
      animate={props.isAdded ? "added" : props.drop ? "drop" : "neutral"}
      // animate={props.drop ? "drop" : "neutral"}
      // transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onClick={props.handler}
    >
      <p className="text-2xl md:text-4xl lg:text-5xl">{`${props.val}`}</p>
    </motion.button>
    // </div>
  );
}
