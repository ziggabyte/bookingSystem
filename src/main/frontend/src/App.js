import "./App.css";
import { TextField, NativeSelect, FormControl, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          color="warning"
        />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          color="warning"
        />
        <FormControl variant="standard" sx={{ m: 2, minWidth: 190 }}>
          <NativeSelect
            defaultValue={1}
            inputProps={{
              name: "service",
              id: "uncontrolled-native",
            }}
          >
            <option value={1}>Basic Städning</option>
            <option value={2}>Topp Städning</option>
            <option value={3}>Diamant Städning</option>
            <option value={4}>Fönstertvätt</option>
          </NativeSelect>
        </FormControl>
        <Button onClick={bookingAlert}>Enter</Button>
      </header>
    </div>
  );
}

export default App;

function bookingAlert() {
  alert("Booking completed!");

  window.location.reload(false);
}
