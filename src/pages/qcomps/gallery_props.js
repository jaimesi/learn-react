import React from 'react';

function Profile(props) {
  return (
      <section className="profile">
        <h2>{props.name}</h2>
        <img
            className="avatar"
            src={props.imageUrl}
            alt={props.name}
            width={props.imageWidth}
            height={props.imageHeight}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {props.profession}
          </li>
          <li>
            <b>Awards: {props.awards.length} </b>
            ({props.awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {props.discovery}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile
            name="Maria Skłodowska-Curie"
            imageUrl="https://i.imgur.com/szV5sdGs.jpg"
            imageWidth={70}
            imageHeight={70}
            profession="physicist and chemist"
            awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
            discovery="polonium (element)"
        />
        <Profile
            name="Katsuko Saruhashi"
            imageUrl="https://i.imgur.com/YfeOqp2s.jpg"
            imageWidth={70}
            imageHeight={70}
            profession="geochemist"
            awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
            discovery="a method for measuring carbon dioxide in seawater"
        />
      </div>
  );
}
