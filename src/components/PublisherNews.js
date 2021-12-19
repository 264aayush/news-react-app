import myContext from "../context/MyContext";
import { useParams } from 'react-router-dom';

let PublisherNews = () => {
	let p = useParams()
	return <myContext.Consumer>
		{
			value => {
				console.log("value from publisher", value)
				console.log("p is", p)
				return <div>

					<h2>{p.publisher}</h2>
					<div className="list-group">
						{value.newsData.filter(x => {
							// console.log(x)
							let temp = x.PUBLISHER.replaceAll("\\", '');
							return temp == p.publisher
							// return true;
						}).map(k => {
							console.log("peno", k)
							return <div className="list-group-item list-group-item-action">
								{k.TITLE && <h3>{k.TITLE}</h3>}
								{k.URL && <a href={`${k.URL}`}>{k.URL}</a>}
							</div>
						})

						}
					</div>


				</div>
			}
		}
	</myContext.Consumer>
}

export default PublisherNews;