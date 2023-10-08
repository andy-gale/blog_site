import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["item1", "item2", "item3", "item4", "item5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      //each component has independent states
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Alert1!</Alert>
        )}
      </div>
      <div>
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          Button text
        </Button>
      </div>
    </div>
  );
}

export default App;
