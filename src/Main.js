import './main.css';
import { FullName, ProfilPhoto, Skills } from './profile';

function Main() {
  return (
    <div className="main">
      <ProfilPhoto />
      <FullName />
      <Skills />
    </div>
  );
}

export default Main;
