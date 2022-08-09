import Card from "../UI/Card";
import classes from './ShowUser.module.css';


const ShowUser = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShowUser;
