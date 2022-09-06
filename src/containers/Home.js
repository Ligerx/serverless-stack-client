import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { API, Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import "./Home.css";

const dummyEmail = 'admin@example.com';
const dummyPassword = 'Passw0rd!';

export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  useEffect(() => {
    async function onLoad() {
      if (!props.isAuthenticated) {
        return;
      }
  
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        alert(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [props.isAuthenticated]);
  
  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function handleDummyAccountLogin(event) {
    event.preventDefault();
    handleSubmit(dummyEmail, dummyPassword);
  }

  async function handleSubmit(email, password) {
    setIsLoginLoading(true);

    try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      setIsLoginLoading(false);
    } catch (e) {
      alert(e.message);
      setIsLoginLoading(false);
    }
  }
  
  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <ListGroupItem header={note.content.trim().split("\n")[0]}>
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>

        <LoaderButton onClick={handleDummyAccountLogin} isLoading={isLoginLoading} style={{ marginTop: 16, marginLeft: 10, marginRight: 10 }}>
            Login with Dummy Account
        </LoaderButton>
      </div>
    );
  }  

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
