import "./Reconocimientos.css";

export default function Reconocimientos() {
  const reconocimientos = [
    {
      id: 1,
      imagen: "/reconocimiento.jpg",
      titulo: "Reconocimiento 1",
      descripcion:
        "Este premio simboliza el reconocimiento al esfuerzo constante, la dedicación y el compromiso demostrados a lo largo del tiempo. Representa la perseverancia, la responsabilidad y el deseo de superación, valores que inspiran a seguir dando lo mejor en cada desafío.",
    },
    {
      id: 2,
      imagen: "/reconocimiento.jpg",
      titulo: "Reconocimiento 2",
      descripcion:
        "Este premio simboliza el reconocimiento al esfuerzo constante, la dedicación y el compromiso demostrados a lo largo del tiempo. Representa la perseverancia, la responsabilidad y el deseo de superación, valores que inspiran a seguir dando lo mejor en cada desafío.",
    },
    {
      id: 3,
      imagen: "/reconocimiento.jpg",
      titulo: "Reconocimiento 3",
      descripcion:
        "Este premio simboliza el reconocimiento al esfuerzo constante, la dedicación y el compromiso demostrados a lo largo del tiempo. Representa la perseverancia, la responsabilidad y el deseo de superación, valores que inspiran a seguir dando lo mejor en cada desafío.",
    },
    {
      id: 4,
      imagen: "/reconocimiento.jpg",
      titulo: "Reconocimiento 4",
      descripcion:
        "Este premio simboliza el reconocimiento al esfuerzo constante, la dedicación y el compromiso demostrados a lo largo del tiempo. Representa la perseverancia, la responsabilidad y el deseo de superación, valores que inspiran a seguir dando lo mejor en cada desafío.",
    },
  ];

  return (
    <section className="max-container_reconocimientos">
      <h1 className="title_reconocimientos">Reconocimientos</h1>
      <div className="reconocimientos_cards">
        {reconocimientos.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.imagen} alt={item.titulo} />
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
