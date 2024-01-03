import Timeline from "./components/Timeline";
import TimelineItem from "./components/TimelineItem";
import reactSvg from "./assets/react.svg";

function App() {
  return (
    <div className="mx-10 my-10">
      <Timeline
        type="vertical"
        animation={true}
        activeLineStyle={{ backgroundColor: "blue" }}
        passiveLineStyle={{ backgroundColor: "red" }}
      >
        <TimelineItem
          dotIcon={<img src={reactSvg} alt="reactSvg" />}
          dotColor="#3b4d3f"
          dotStyle={{ width: "20px", height: "20px", top: "-10px" }}
          dotText={<h1>223</h1>}
          place="opposite"
        >
          <div className="flex flex-col items-center justify-center px-3 py-4">
            <h3 className="text-2xl">Timeline 1</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotStyle={{ width: "20px", height: "20px", top: "-10px" }}
          dotIcon={<img src={reactSvg} alt="reactSvg" />}
          dotColor="#3b327a"
          dotText={<h1>223</h1>}
        >
          <div className="flex flex-col items-center justify-center px-3 py-4">
            <h3 className="text-2xl">Timeline 2</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotText={<h1>fsdfs</h1>}
          dotStyle={{ width: "20px", height: "20px", top: "-10px" }}
          dotColor="#bc6989"
        >
          <div className="flex flex-col items-center justify-center px-3 py-4">
            <h3 className="text-2xl">Timeline 3</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotStyle={{ width: "20px", height: "20px", top: "-10px" }}
        >
          <div className="flex flex-col items-center justify-center px-3 py-4">
            <h3 className="text-2xl">Timeline 1</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              asperiores!
            </p>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
