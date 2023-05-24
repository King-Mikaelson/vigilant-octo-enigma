import { Link } from "react-router-dom";

// export default function ErrorPage() {
//   const error: any = useRouteError();
//   console.error(error);

//   return (
//     <div id="error-page">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }

export default function ErrorPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested page does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}
