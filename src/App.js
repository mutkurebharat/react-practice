// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Greet from "./Greet";
import Welcome from "./Welcome";
import Hello from "./Hello";
import Prop from "./Prop";
import Message from "./Message";
import Counter from "./Counter";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";
import EventBind from "./EventBind";
import ParentComponent from "./methodAsProps/ParentComponent";
import UserGreeting from "./ConditionalRendering/ifElse/UserGreeting";
import NameList from "./ListsRendering/NameList";
import StyleSheet from "./css_styling/styleSheet";
import Inline from "./css_styling/Inline";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import Form from "./Form_Handling/Form";
// import "./appStyle.module.css";
import LifeCycleA from "./Component_Mounting_Lifecycle_Methods/LifecycleA";
import LifeCycleAUpdatig from "./Component_Updating_Lifecycle_Methods/LifeCycleAUpdating";
import FragmentDemo from "./Fragment/FragmentDemo";
import Table from "./Fragment/Table";
import ParentComp from "./Pure_Component/Parent_Comp";
import ParentMemoComp from "./Memo/ParentMemoComp";
import RefsDemo from "./Refs/RefsDemo";
import FocusInput from "./Refs/RefsWithClassComponent/FocusInput";
import FrParentInput from "./Refs/ForwadingRefs/FrParentInput";
import PortalDemo from "./Portal/PortalDemo";
import Hero from "./Error_Boundry.js/Hero";
import ErrorBoundry from "./Error_Boundry.js/ErrorBoundry";
import ClickCounter from "./Higher_Order_components/ClickCounter";
import HoverCounter from "./Higher_Order_components/HoverCounter";
import ClickCounterPart2 from "./Higher_Order_components/Part-2/ClickCounterPart2";
import HoverCounterPart2 from "./Higher_Order_components/Part-2/HoverCounterPart2";
import ClickCounterTwo from "./Render_Prop/ClickCounterTwo";
import HoverCounterTwo from "./Render_Prop/HoverCounterTwo";
import User from "./Render_Prop/User";
import RenderPropCounter from "./Render_Prop/Counter";
import ComponentC from "./Context_API/ComponentC";
import { UserProvider } from "./Context_API/UserContext";

// function App() {
//   return (
//     <div className="App">
//       <h1>React App</h1>
//     </div>
//   );
// }

// const App = () => (
//     <div className="App">
//       <h1>React App</h1>
//       <Greet />
//     </div>
// )

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className="error">Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <h1 className="success">Success</h1> */}
        {/* <h1>App Component</h1>
        <Greet />
        <Welcome name="Bruce" heroName="BatMan"/>
        <Welcome name="Clark" heroName="SuperMan"/>
        <Welcome name="Diana" heroName="WonderWomen"/>
        <Hello />
        <Prop name="Bruce" heroName="BatMan">
          <p>This is children Prop</p>
        </Prop>
        <Prop name="Clark" heroName="SuperMan">
          <button>Action</button>
        </Prop>
        <Prop name="Diana" heroName="WonderWomen" /> */}
        {/* <Message />
        <Counter /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <StyleSheet primary="true" /> */}
        {/* <Inline /> */}
        {/* <Form /> */}
        {/* ======================== LifeCycle =========================== */}
        {/* <LifeCycleA /> */}
        {/* <LifeCycleAUpdatig /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* =============================== Pure Component ============================ */}
        {/* <ParentComp /> */}
        {/* ==================== Memo -------------------------------------- */}
        {/* <ParentMemoComp /> */}
        {/* --------------------- Refs ----------------------------- */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FrParentInput /> */}
        {/* <PortalDemo /> */}
        {/* ---------------------- Error Boundry ----------------------------- */}
        {/* <ErrorBoundry>
          <Hero heroName="Batman" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName="SuperMan" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName="joker" />
        </ErrorBoundry> */}

        {/* --------------------- Higher Order Components ---------------------------- */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <ClickCounterPart2 name="Bharat"/>
        <HoverCounterPart2 /> */}

        {/* ----------------------- Render Props --------------------------------------- */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}
        {/* <User name= {() => "Bharatt"} /> */}
        {/* <User render= {(isLoggedIn) => isLoggedIn ? "Bharatt" : 'Guest'} /> */}

        {/* <RenderPropCounter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <RenderPropCounter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <RenderPropCounter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </RenderPropCounter>
        <RenderPropCounter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </RenderPropCounter> */}

        {/* ---------------------- Context API ----------------------------------- */}
        {/* Commenting for passing default value to CreateContext() */}
        <UserProvider value="Mohit"> 
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
