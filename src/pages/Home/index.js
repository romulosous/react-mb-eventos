import { useState } from "react"
import EventCard from "../../components/EventCard"
import "./home.css"

export default function Dashboard() {
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



  return (
    <div className="container-home">
      <div className="d-flex justify-content-center">
        <form className="formSearchPost" onSubmit={() => { }}>
          <input
            type="text"
            placeholder="Encontrar eventos"
            className="mb-1"
          />
        </form>
      </div>

      {!!events.length && <div>
        <h2 className="title-events">Eventos on-line</h2>
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
      </div>
      }

      {!events.length && <p className="text-center">Events not found with this title =)</p>}
    </div>
  )
}