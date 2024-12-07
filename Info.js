export default function Info({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data?.name || !data?.desc ? (
    <p>No data for {name}</p>
  ) : (
    // <></>
    <div>
      <h2 id="spell-name">{data.name}</h2>
      <div id="small">
        <p>Range:</p>
        <p>{data.range}</p>
        <p>Components:</p>
        <p>{data.components}</p>
        <p>Duration:</p>
        <p>{data.duration}</p>
      </div>
      <p>Description:</p>
      <p>{data.desc}</p>
    </div>
  );
}
