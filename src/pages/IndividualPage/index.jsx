import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const baseUrl = 'https://flask-project-akxn.onrender.com/characters';

export default function IndividualPage() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [charName, setCharName] = useState('');
  const [age, setAge] = useState(0);
  const [phrase, setPhrase] = useState('');
  const navigate = useNavigate();

  const fetchCharacters = async () => {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    console.log(data);
    setCharacters(data.characters);
  };

  useEffect(() => {
    fetchCharacters();
    console.log(characters);
  }, []);

  function showEdit() {
    setToggleEdit(!toggleEdit);
  }

  const handleName = (e) => {
    e.preventDefault();
    setCharName(e.target.value);
  };
  const handleAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const handleCatchPhrase = (e) => {
    e.preventDefault();
    setPhrase(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('clicked');
    const response = fetch(`${baseUrl}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        id: id,
        name: charName,
        age: age,
        catch_phrase: phrase,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // const data = await response.json();
    // console.log(data);

    navigate('/characters');
  }

  function destroy() {
    const response = fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    navigate('/characters');
  }

  return (
    <div>
      <h1>hello</h1>
      <h2></h2>
      <button
        onClick={() => {
          showEdit();
        }}
      >
        Edit
      </button>
      {toggleEdit ? (
        <div>
          <label>
            Change Name
            <input
              type="text"
              placeholder="Change Name"
              onChange={handleName}
            />
          </label>
          <label>
            Change Age
            <input
              type="number"
              placeholder="Change Age"
              onChange={handleAge}
            />
          </label>
          <label>
            Change Catch Phrase
            <input
              type="text"
              placeholder="Change Catch Phrase"
              onChange={handleCatchPhrase}
            />
          </label>
          <button
            onClick={async (e) => {
              handleSubmit(e);
            }}
          >
            Submit Changes
          </button>
          <button onClick={destroy}>Delete</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
