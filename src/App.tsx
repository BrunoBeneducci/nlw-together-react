import Button from '../src/components/Button';

function App() {
  return (
    <>
      <h1>
        Hello World!
      </h1>
      <Button disabled={false}>Button test</Button>
      <Button disabled={true}>Button test</Button>
    </>
  );
}

export default App;
