import { useNavigate } from 'react-router-dom';
import myContext from '../context/MyContext';


let Home = () => {
  let navigate = useNavigate();
  let selectPublisher = (e) => {
    // console.log(e.target.value);
    let publisherName = e.target.value;
    publisherName = publisherName.replaceAll("\\", '')
    navigate(`/${publisherName}`)
  }


  return (
    <div>
      <h3>Publishers</h3>
      <div className='list-group'>
        <myContext.Consumer>
          {value => {
            return value.publishers.map(publisher => {
              return (
                <button className='list-group-item list-group-item-action' key={publisher} onClick={selectPublisher} value={publisher}>
                  {publisher.replaceAll("\\", '')}
                </button>
              )
            })
          }}
        </myContext.Consumer>

      </div>
    </div>
  );
}

export default Home;