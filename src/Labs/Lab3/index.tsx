import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexandLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanTypes from "./BooleanTypes";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import Destructing from "./Destructing";
import DestructingImports from "./DestructuringImport";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArray from "./SimpleArray";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import Ternary from "./Ternary";
import TodoItem from "./Todos/TodoItem";
import TodoList from "./Todos/TodoList";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import Highlight from "./Highlight";
import "./style.css" ;
import PathParameters from "./PathParameters";
export default function Lab3(){
    console.log('Hello World!');
    return (
        <div>
          <h2>Lab 3</h2>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanTypes/>
          <IfElse/>
          <Ternary/>
          <ConditionalOutputIfElse/>
          <ConditionalOutputInline/>
          <LegacyFunctions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <TemplateLiterals/>
          <SimpleArray/>
          <ArrayIndexAndLength/>
          <AddingAndRemovingToFromArrays/>
          <ForLoops/>
          <MapFunction/>
          <FindFunction/>
          <FindIndex/>
          <FilterFunction/>
          <JsonStringify/>
          <House/>
          <TodoList/>
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
          <DestructingImports/>
          <Classes/>
          <Styles/>
          <Add a={3} b={4} />
          <h4>Square of 4</h4>
          <Square>4</Square>
          <hr />
          <Highlight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
          </Highlight>
          <PathParameters/>
        </div>
      );
}    