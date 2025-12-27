import { urls } from "../utils/urls";

function CircleFour() {
  return (
    <div>
        <button
        onClick={() => {window.location.href = urls()}} 
            className="btn-exit"
        >
            Clique aqui para sair
        </button>
    </div>
  );
}

export default CircleFour;
