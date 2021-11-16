// const Route = (path,children) => {
//    console.log(props);
//    return window.location.pathname===path?children:null;
// }
// export default Route;

const Route = ({path,children}) => {
    return window.location.pathname===path?children:null;
 }
 export default Route;