import testemonials from "../data/testemonial";
import Testemonialcard from "./Testemonialcard";

export default function TestemonialSection() {
  return (
    <section>
      <h1 className="mt-9 text-3xl sm:text-4xl lg:text-5xl font-extrabold m-2 text-center">
        What Our Users are Saying
      </h1>
      <p className="text-[.9rem] lg:text-[1.2rem] font-light text-center mb-6 ">
        Discover how TaskFlow is transforming productivity for peopele just like
        you. Here are some of their Stories.
      </p>
      <div className="sm:mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
        {testemonials.map((t) => (
          <Testemonialcard
            key={t.id}
            name={t.name}
            title={t.title}
            quote={t.quote}
          />
        ))}
      </div>
    </section>
  );
}

