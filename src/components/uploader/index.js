'use strict';

import React from "react";

export default class Uploader extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this._form.addEventListener('submit', event => this._onSubmit(event))
  }

  render() {
    return <form ref={(c) => this._form = c}>
      <label>
        название
        <input type="text" name="name" placeholder="название"/>
      </label>
      <label>
        описание
        <input type="text" name="description" placeholder="описание"/>
      </label>
      <label>
        видеофайл
        <input type="file" name="file" accept="video/*"/>
      </label>
      <input type="submit" value="Отправить"/>
    </form>
  }

  _onSubmit(event) {
    event.preventDefault();

    if (this._formValidate(this._form)) {
      console.log('form valid')
    } else {
      console.log('form not valid')
    }
  }
  
  _validationErrorHandler(elem, eventName) {
    elem.addEventListener(eventName, function inputHandler(event) {
      const target = event.target;
      target.style.backgroundColor = '';
      target.removeEventListener(eventName, inputHandler);
    })
  }

  _formValidate(form) {
    const name = form.name;
    const description = form.description;
    const file = form.file;
    const errColor = 'tomato';
    let valid = true;

    if (name.value) {
      valid = true;
      name.style.backgroundColor = '';
    } else {
      valid = false;
      name.style.backgroundColor = errColor;
      this._validationErrorHandler(name, 'input');
    }

    if (description.value) {
      valid = true;
      description.style.backgroundColor = '';
    } else {
      valid = false;
      description.style.backgroundColor = errColor;
      this._validationErrorHandler(description, 'input');
    }

    if (file.value) {
      valid = true;
      file.style.backgroundColor = '';
    } else {
      valid = false;
      file.style.backgroundColor = errColor;
      this._validationErrorHandler(file, 'change');
    }


    return valid;
  }
}
