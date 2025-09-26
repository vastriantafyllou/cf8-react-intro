// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";             // ./ σημαίνει ότι είομαστε στο src, και του λέμε να μας φέρει το ViteIntro
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";

import Layout from "./components/Layout.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {
    return (
    <>
      {/*<ViteIntro />*/}
      {/*<ClassComponent/>*/}
      {/*<FunctionalComponent/>*/}
      {/*<ArrowFunctionalComponent/>*/}
      {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props" />*/}
      {/*<ArrowFunctionalComponentWithProps title="2nd Title" />*/}
      {/*<ArrowFunctionalComponentWithPropsType*/}
      {/*  title="Is an Arrow Functional Component with 2 Props"*/}
      {/*  description="lorem ipsum dolor sit amet" */}
      {/*/>*/}

    {/*<Card title="Card">*/}
    {/*  <ArrowFunctionalComponentWithPropsType*/}
    {/*    title="Is an Arrow Functional Component with 2 Props"*/}
    {/*    description="lorem ipsum dolor sit amet"*/}
    {/*  />*/}
    {/*</Card>*/}
      <Layout>
        <ArrowFunctionalComponentWithPropsType
          title="Is an Arrow Functional Component with 2 Props"
          description="lorem ipsum dolor sit amet"
        />
      </Layout>
    </>
  )
}

export default App
