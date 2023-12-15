interface BeautifulTimelineProps {
  type?: "vertical" | "horizantol";
  cardClassName?: string;
}

const BeautifulTimeline = ({ type }: BeautifulTimelineProps) => {
  console.log(type);
  return <button>Beautiful Timeline Button V6</button>;
};

export default BeautifulTimeline;
