import { useStyles } from "./Styles";

const Header = () => {
    const styles = useStyles();
    return (
        <div className={styles.constainer}>
            Crud App with firebase
        </div>
    )
}

export default Header;