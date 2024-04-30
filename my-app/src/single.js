import Slayers from './data/slayers.json'

const single = () => {
    const currentRoute = window.location.pathname;
    const slayer = Slayers.find(it => currentRoute.includes(it.slug))

    return(<>
    <h1>{slayer.name}</h1>
    <hr></hr>
    <img src={slayer.picture}></img>
    <p>{slayer.description}</p>

    </>);
}
export default single;