import React from 'react';
import CookieConsent, { Cookie } from "react-cookie-consent";
import TEXT from './../text';

const CookiesBanner = () =>
    <CookieConsent
        location="bottom"
        buttonText={TEXT.COOKIES.BUTTON}
        cookieName="userAgreedWithCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", borderRadius: '0.25rem',position: 'static', display: 'block', marginLeft: 'calc(50% - 25px)' }}
        >
        <span>{TEXT.COOKIES.CONSENT}</span>
    </CookieConsent>;

export default CookiesBanner;
