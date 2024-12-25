import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return (
        <>
        <h1>Oopsss!!!!</h1>
        <h3>Something went wrong</h3>
        <h3>{err.status +":"+ err.statusText}</h3>
        </>
    )
}
export default Error;