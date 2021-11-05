import { useState } from "react"
import EventCard from "../../components/EventCard"
import "./home.css"

export default function Dashboard() {
  const title = "First Home"
  const events = [{
    id: "1",
    title: "Event Go",
    description: "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
    startDate: "2021-10-21",
    endDate: "2021-10-20",
    startHour: 15,
    endHour: 18,
    numberTickets: 26,
    price: 0,
    users: [{
      email: "someemail1@gmail.com",
      name: "Some name 1"
    },
    {
      email: "someemail1@gmail.com",
      name: "Some name 1"
    }
    ],
    owner: {
      id: "12",
      email: "romulo@teste.com",
      name: "romulo"
    }
  },
  {
    id: "1",
    title: "Event Go",
    description: "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
    startDate: "2021-10-21",
    endDate: "2021-10-20",
    startHour: 15,
    endHour: 18,
    numberTickets: 26,
    price: 0,
    users: [{
      email: "someemail1@gmail.com",
      name: "Some name 1"
    },
    {
      email: "someemail1@gmail.com",
      name: "Some name 1"
    }
    ],
    owner: {
      id: "12",
      email: "romulo@teste.com",
      name: "romulo"
    }
  },
  {
    id: "1",
    title: "Event Go",
    description: "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
    startDate: "2021-10-21",
    endDate: "2021-10-20",
    startHour: 15,
    endHour: 18,
    numberTickets: 26,
    price: 0,
    users: [{
      email: "someemail1@gmail.com",
      name: "Some name 1"
    },
    {
      email: "someemail1@gmail.com",
      name: "Some name 1"
    }
    ],
    owner: {
      id: "12",
      email: "romulo@teste.com",
      name: "romulo"
    }
  },
  {
    id: "1",
    title: "Event Go",
    description: "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
    startDate: "2021-10-21",
    endDate: "2021-10-20",
    startHour: 15,
    endHour: 18,
    numberTickets: 26,
    price: 0,
    users: [{
      email: "someemail1@gmail.com",
      name: "Some name 1"
    },
    {
      email: "someemail1@gmail.com",
      name: "Some name 1"
    }
    ],
    owner: {
      id: "12",
      email: "romulo@teste.com",
      name: "romulo"
    }
  },
  {
    id: "1",
    title: "Event Go",
    description: "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
    startDate: "2021-10-21",
    endDate: "2021-10-20",
    startHour: 15,
    endHour: 18,
    numberTickets: 26,
    price: 0,
    users: [{
      email: "someemail1@gmail.com",
      name: "Some name 1"
    },
    {
      email: "someemail1@gmail.com",
      name: "Some name 1"
    }
    ],
    owner: {
      id: "12",
      email: "romulo@teste.com",
      name: "romulo"
    }
  },
  {
    id: "1",
    title: "Event Go",
    description: "Plataforma que possibilita inscrição, cadastro e check-in de atletas em eventos esportivos como Mountain Bike",
    startDate: "2021-10-21",
    endDate: "2021-10-20",
    startHour: 15,
    endHour: 18,
    numberTickets: 26,
    price: 0,
    users: [{
      email: "someemail1@gmail.com",
      name: "Some name 1"
    },
    {
      email: "someemail1@gmail.com",
      name: "Some name 1"
    }
    ],
    owner: {
      id: "12",
      email: "romulo@teste.com",
      name: "romulo"
    }
  }
  ]


  // const filteredEvents = searchValue ? allEvents.filter((post) => post.title.toUpperCase().includes(
  //   searchValue.toUpperCase()
  // )) : events;

  return (
    <div className="container-home">
      <div className="d-flex justify-content-center">
        <form className="formSearchPost" onSubmit={() => { }}>
          <input
            type="text"
            id="inputSearchPost"
            placeholder="Search a post"
            name="searchPost"
            className="mb-1"
          />
          {/* <Button
            title="Submit"
            type="submit"
          /> */}
        </form>
      </div>

      {!!events.length && <div>
        <h2>Eventos on-line</h2>
        <div className="events">
          {
            events.map((event) => (
              <EventCard
                key={event.id}
                cover={event.cover}
                title={event.title}
                description={event.description}

              />
            ))
          }
        </div>
        {/* {!searchValue &&
          <Button
            title="Load more"
            handleClick={this.handleToggleButton}
            disabled={noMoreEvents}
            type="button"
          />
        } */}
      </div>
      }

      {!events.length && <p className="text-center">Events not found with this title =)</p>}
    </div>
  )
}