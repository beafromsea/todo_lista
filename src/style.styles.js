import styled from "styled-components";

export const StyleContainer = styled.body`
  font-family: Arial;
  background-color: #f4f4f4;
  padding: 30px;
  color: #333;
  background-image: url("/img-lista.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  .app {
    max-width: 600px;
    margin: 0 auto 300px;
    background-color: #efefef;
    padding: 20px 30px;
    border-radius: 10px;
  }

  h1 {
    text-align: center;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 10px 0;
  }

  input {
    box-sizing: border-box;
  }

  button {
    background-color: #723172;
    color: #fff;
    padding: 5px 10px;
    margin-right: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
  }

  button:hover {
    opacity: 1;
  }

  .todo-list {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #555;
  }

  .todo {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .complete {
    background-color: #00dccf;
  }

  .remove {
    background-color: #ef6f82;
  }

  .todo-form {
    padding-bottom: 1.5rem;
  }

  input,
  select {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
  }

  .filter,
  .search {
    border-bottom: 1px solid #555;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .filter-options {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }

  .filter-options div {
    flex: 1 1 0;
  }
`;
