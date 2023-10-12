import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  let items = ["item1", "item2", "item3", "item4", "item5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="wrapper">
      <nav>
        <Navbar />
      </nav>
      <div className="main-page">
        <div className="sidebar">
          <h1>Sidebar</h1>
          <ListGroup
            items={items}
            heading="Filter"
            onSelectItem={handleSelectItem}
          />
          <ListGroup
            items={items}
            heading="Filter"
            onSelectItem={handleSelectItem}
          />
        </div>

        <div className="content-page">
          <h1>Post grid</h1>
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
      </div>
    </div>
  );
}

export default App;
