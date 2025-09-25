// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";             // ./ σημαίνει ότι είομαστε στο src, και του λέμε να μας φέρει το ViteIntro
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";

function App() {
    return (
    <>
      {/*<ViteIntro />*/}
      <ClassComponent/>
      <FunctionComponent/>
      <ArrowFunctionalComponent/>
    </>
  )
}

export default App
