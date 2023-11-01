import { getCarName, getMoveNumber, getCarsMovedCount } from "./getUserInput";
import { moveCars } from "./move";

class App {
  async play() {
    const names = await getCarName();
    let moveNumber = await getMoveNumber();

    const carsMovedCount = getCarsMovedCount(names);

    while (moveNumber--) {
      moveCars(names, carsMovedCount);
    }
  }
}

export default App;
