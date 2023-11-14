type GreetProps = {
  name?: string;
};

function Greet(props: GreetProps) {
  return <div>Hello {props.name}</div>;
}

export default Greet;
