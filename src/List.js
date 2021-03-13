import React, {Component} from 'react';
class List extends Component {

  render(){
    const {profiles, users, movies}  = this.props
   return(
     <ul>{profiles.map(profile => <li key={profile.id}>{`${users[profile.userID].name} favourite movie is ${movies[profile.favoriteMovieID].name}`}</li>)} </ul>
   )
  
  }

}


export default List;