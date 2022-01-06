import { makeStyles } from "@material-ui/core/styles";
import { config } from "../../config/themeSettings";
export const useStyles = makeStyles((theme) => ({
    constainer: {
        width: "100%",
        height: "100%",
        backgroundColor: config.color.white,
        padding: "10px",
        boxSizing: "border-box"
    },
    menu: {
        width: "100%",
        height: "35px",
        backgroundColor: config.color.primary,
        color: config.color.white,
        margin: "10px 0px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "10px",
        boxSizing: "border-box",
        borderRadius: "3px"
    }
}))