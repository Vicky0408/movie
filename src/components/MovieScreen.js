import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import Card from '../logo.svg';
import '../App.css'
var axios = require("axios").default;

function MovieScreen({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  const aa = userData.users.results;
  return userData.loading ? (
    <h2>Loading </h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div class="container-fluid">
      <div class="row">
        {console.log(userData.users)}
            
            {aa &&
          aa.map((item) => {
            //   {console.log(item)}
              return (
                <div class="col  s12 m3">
                <div class="card" style={{height:600}}>
                  <div class="card-image">
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}  style={{width:"100%" , height:"400"}}/> 
                    
                  </div>
                  <div class="card-content">
                      <h6 class="text1">{item.title}</h6>
                    <p class="text">{item.overview}</p>
                  </div>
                </div>
              </div>
              )
              
        })}

      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
