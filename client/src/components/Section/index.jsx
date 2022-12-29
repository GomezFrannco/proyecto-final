import "./index.scss"

function Section(props) {
  return (
    <section id={props.id} className={`section__container ${props.class}`}>
      {props.children}
    </section>
  );
}

export default Section;
