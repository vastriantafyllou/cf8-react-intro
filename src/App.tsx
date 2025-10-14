// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";             // ./ σημαίνει ότι είμαστε στο src, και του λέμε να μας φέρει το ViteIntro
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";

// import Layout from "./components/Layout.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import {useEffect} from "react";
// import {ArrowFunctionalComponentWithProps} from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import Counter from "./components/Counter.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

// import Layout from "./components/Layout.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";

// import Layout from "./components/Layout.tsx";
// import WindowSize from "./components/WindowSize.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import CounterWithRef from "./components/CounterWithRef.tsx";
// import {useEffect} from "react";
// import PreviousValue from "./components/PreviousValue.tsx";
// import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
// import Timer from "./components/Timer.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import {useEffect} from "react";

import {BrowserRouter, Route, Routes} from "react-router";
import RouterLayout from "./components/RouterLayout.tsx";
import HomePage from "./Pages/HomePage.tsx";
import NameChanger from "./components/NameChanger.tsx";
import Timer from "./components/Timer.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import Timer from "./components/Timer.tsx";
// import HomePage from "./Pages/HomePage.tsx";

function App() {

  // useEffect(() => {
  //   const id = setInterval(() => console.log(id), 1000);
  //   return () => clearInterval(id);
  // },[]);

  // useEffect(() => {
  //   let counter: number = 1;
  //   const id: number = setInterval(() => {
  //     console.log(counter++);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [])

  // useEffect(() => {
  //   history.pushState({page: 1}, "", "/page");
  //   history.replaceState({page: 1}, "", "/page1");
  //
  //   window.onpopstate = (e) => {
  //     console.log(e.state);
  //   }
  // })

    return (
    <>
      {/*<ViteIntro />*/}
      {/*<ClassComponent/>*/}
      {/*<FunctionalComponent/>*/}
      {/*<ArrowFunctionalComponentWithProps/>*/}
      {/*<ArrowFunctionalComponentWithProps title="2nd Title" />*/}
      {/*<ArrowFunctionalComponentWithPropsType*/}
      {/*  title="Is an Arrow Functional Component with 2 Props"*/}
      {/*  description="lorem ipsum dolor sit amet" */}
      {/*/>*/}

    {/*  <ArrowFunctionalComponentWithPropsType*/}
    {/*    title="Is an Arrow Functional Component with 2 Props"*/}
    {/*    description="lorem ipsum dolor sit amet"*/}
    {/*  />*/}
    {/*  <Layout>*/}
        {/*<Card title="Card Component">*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*  title="Is an Arrow Functional Component with 2 Props"*/}
        {/*  description="lorem ipsum dolor sit amet"*/}
        {/*/>*/}
        {/*<FunctionalComponentWithState/>*/}
        {/*<ClassComponentWithState/>*/}
        {/*<Counter/>*/}
        {/*<NameChanger/>*/}
        {/*<CounterWithMoreStates/>*/}
        {/*<CounterAdvanced/>*/}
        {/*</Card>*/}
        {/*<CounterWithCustomHook/>*/}
        {/*<NameChangerWithEffect/>*/}
        {/*<Timer/>*/}
        {/*<WindowSize/>*/}
        {/*<FocusInput/>*/}
        {/*<CounterWithRef/>*/}
        {/*<PreviousValue/>*/}
      {/*</Layout>*/}
      <BrowserRouter>
        <Routes>

          <Route element={<RouterLayout/>}>

            <Route index element={<HomePage />} />

            {/*<Route path="examples/name-changer" element={<NameChanger />} />*/}
            {/*<Route path="examples/timer" element={<Timer />} />*/}

            <Route path="examples?">
              <Route path="name-changer" element={<NameChanger/>}/>
              <Route path="timer" element={<Timer/>}/>
              {/*<Route path="*" element={<ExamplePage/>}/>*/}
            </Route>

          </Route>

          {/*<Route path="users/:userId" element={<UserPage />} />*/}
          {/*<Route path="users/:userId/accounts" element={<UserAccountPage />} />*/}


          {/*<Route path="files/*" element={<FilePage />} />*/}

          {/*<Route path="*" element={<PageNotFound />}/>*/}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
