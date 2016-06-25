'use strict';

import React from "react";

export default class Uploader extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <form>
      <label>
        название
        <input type="text" name="name"/>
      </label>
      <label>
        описание
        <input type="text" name="description"/>
      </label>
      <label>
        видеофайл
        <input type="file" name="file" accept="video/*"/>
      </label>
      <input type="submit" value="Отправить"/>
    </form>
  }
}
