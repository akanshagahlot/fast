export default function ServiceCard({ title, text }) {
  return (
    <div className="serviceCard">
      <div className="serviceIcon">🚚</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}