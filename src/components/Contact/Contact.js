import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { StyledContact, classes, StyledFontAwesomeIcon } from "./styles";

export function Contact() {
    return (
        <StyledContact>
            <li className={classes.listItem}>
                <StyledFontAwesomeIcon icon={faPhone} />
                <span>phone: +38 (98) 000 88 00</span>
            </li>
            <li className={classes.listItem}> 
                <StyledFontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Location: Kyiv, Ukraine</span>
            </li>
        </StyledContact>
    )
}