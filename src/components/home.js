import CoverPhoto from '../imgs/floor_to_canopy_cropped.png';
import NavBar from './nav-bar.js'

export default function Home(props) {
  return (
    <main className="home">
      <div className="cp-container">
        <img
          src={CoverPhoto}
          alt="woman foraging in a food forest"
          className="cover-photo"
        />
        <NavBar
          history={props.history}
        />
      </div>
    </main>
  );
}
