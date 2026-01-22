import "./App.css";
import { useState } from "react";

function App() {
  // [변수명, 변경함수] = useState(초기값)
  const [ skills, setSkills ] = useState(["Swift", "SwiftUI", "React"]);
  const [ inputVal, setInputVal ] = useState("");

  const addSkill = () => {
    const newSkills = [...skills, inputVal];
    setSkills(newSkills);

    setInputVal("");
  };

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h2>🔥 SkillSet</h2>

      <input type="text"
        value={inputVal}
        // 키보드를 칠 때마다 State를 업데이트
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="스킬을 입력하세요"
       />
       <button onClick={addSkill}>추가</button>

       <ul style={{textAlign: "left", marginTop: "10px"}}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
       </ul>
    </div>
  );
}

export default App;