import { useStyles } from "./Styles";

const SideBar = ({ menuList }) => {
    const styles = useStyles();
    return (
        <div className={styles.constainer}>
            {menuList?.map((menu) => (
                <div className={styles.menu}>{menu}</div>
            ))}
        </div>
    )
}

export default SideBar;