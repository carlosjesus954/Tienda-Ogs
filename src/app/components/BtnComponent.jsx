export default function BtnComponent(props) {
  return (
    <button className="Btn-reutilizable" onSubmit={props.funcion}>
      {props.value}
    </button>
  );
}
