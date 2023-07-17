import { Header } from "../../componants/Header";
import { Footer } from "../../componants/Footer";
import { Tasks } from "../../componants/Task";
import { TaskInput } from "../../componants/TaskInput";
export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Tasks title="Read a Book"></Tasks>
        {/* task */}
        <Tasks title="Take a shower"></Tasks>
        {/* task */}
        <Tasks title="Sleep"></Tasks>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullname="Ronnachai Sitthichoksathit"
        studentID="650612098"
      ></Footer>
    </div>
  );
}
