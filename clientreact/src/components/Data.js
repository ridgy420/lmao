import React, { Component } from "react";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [
        {
          artist: "Jam Fuzz Kid",
          listeners: 2397,
        },
        {
          artist: "Neck Deep",
          listeners: 1382440,
        },
        {
          artist: "Marco McKinnis",
          listeners: 130811,
        },
        {
          artist: "Alpha Wolf",
          listeners: 125063,
        },
        {
          artist: "Dijon",
          listeners: 1708353,
        },
        {
          artist: "TWICE",
          listeners: 5247328,
        },
        {
          artist: "Halogenix",
          listeners: 211561,
        },
        {
          artist: "SATICA",
          listeners: 146162,
        },
        {
          artist: "ITZY",
          listeners: 2810602,
        },
        {
          artist: "Tiny Moving Parts",
          listeners: 207941,
        },
        {
          artist: "Covet",
          listeners: 169481,
        },
        {
          artist: "Iglooghost",
          listeners: 99271,
        },
        {
          artist: "The 1975",
          listeners: 12903787,
        },
        {
          artist: "Mahalia",
          listeners: 4857638,
        },
        {
          artist: "Kina Grannis",
          listeners: 4628228,
        },
        {
          artist: "IU",
          listeners: 5051739,
        },
        {
          artist: "Veil of Maya",
          listeners: 364343,
        },
        {
          artist: "Daniel Caesar",
          listeners: 7946767,
        },
        {
          artist: "Drake",
          listeners: 59860548,
        },
        {
          artist: "UMI",
          listeners: 3339599,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <DataSelect music={this.state.music} />
      </div>
    );
  }
}

class DataSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "UMI" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let artists = this.props.music.map((music) => (
      <option key={music.artist} value={music.artist}>
        {music.artist}
      </option>
    ));

    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          {artists}
        </select>
        <h3>{this.state.value}</h3>
      </div>
    );
  }
}

export default Data;
