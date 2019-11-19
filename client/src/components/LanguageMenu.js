import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { switchLanguage } from './../redux/actions';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { languages } from './../constants';

const LanguageMenu = (props) => {

    const currentLanguage = useSelector(
        state => state.languageReducer.language
    );
    const dispatch = useDispatch();

    // Handle event switch language
    const handleSwitchLanguage = language => {
        return dispatch(switchLanguage(language))
    }

    // Render all available languages
    const renderLanguages = () => {
        return languages.map(language => {
            return(
                <NavItem key={language.key}>
                    <NavLink href="#" onClick={() => handleSwitchLanguage(language.key)}>{language.value}</NavLink>
                </NavItem>
            )
        })
    };

    console.log('current language: ' + currentLanguage);

    return (
        <Nav>
          {renderLanguages()}
        </Nav>
    )
}

export default LanguageMenu;