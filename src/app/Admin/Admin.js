import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loggInUser, logout } from "../../_actions/actions";
import { LineChart, Line } from "recharts";
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Admin",
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("MOJ_TOKEN");

    if (!token) {
      this.props.history.push("/login");
    }
    console.log("token iz Homa ", token);
  }

  render() {
    return (
      <div>
        {/*
        <div
          style={{
            width: 700,
            height: 400,
            border: "1px solid black",
            margin: 50,
          }}
        >
          <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </div>
        */}
        <div>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Pie
              dataKey="value"
              data={data02}
              cx={500}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
            />
            <Tooltip />
          </PieChart>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn, user, userType } = state.authentication;
  return {
    loggedIn,
    user,
    userType,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loggInUser,
      logout,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
