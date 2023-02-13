import { useState } from "react";
import { useRouter } from "next/router";

function EventsList({ eventList }) {
  const router = useRouter();
  const [events, setEvents] = useState(eventList);
  const fetchSportsEvents = async () => {
    const response = await fetch( 
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);

    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <div>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h2>List of events</h2>
      <br />
      {events.map((item) => {
        return (
          <div>
            <h3>
              {item.id} {item.title} | {item.category}{" "}
            </h3>
            <p>{item.description}</p>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default EventsList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
