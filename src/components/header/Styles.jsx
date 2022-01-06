import { makeStyles } from "@material-ui/core/styles";
import { config } from "../../config/themeSettings";
export const useStyles = makeStyles((theme) => ({
    constainer: {
        width: "100%",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        color: config.color.white,
        backgroundColor: config.color.primary,
        fontSize: config.fontSise.h2,
        fontFamily: config.font.heading
    }
}))