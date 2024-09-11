import ModuleMetaData from "../../datastructures/ModuleMetaData";
import Home from "../classes/Home";

export default abstract class Module {
  metadata: ModuleMetaData;
  constructor(metadata: ModuleMetaData) {
    this.metadata = metadata;
  }

  abstract attachModules(list: Module[][]): void;
  abstract addModule(module: Module): void;
  abstract asReactComponent(): React.JSX.Element;
}
