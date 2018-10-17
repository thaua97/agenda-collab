import styled from 'styled-components';

const color = "#38b6ff";

export const Card = styled.article`
    font-family: "Open Sans", sans-serif;
    background-color: ${color};
    color: #fff;
    text-align: center;
    padding: 58px 0 40px 0;
`;

export const Name = styled.h1`
    background: ${color};
    color: #fff;
    text-transform: uppercase;
    margin: 0;
`;

export const Price = styled.h2``;

export const Description = styled.p``;

export const Button = styled.a`
    display: inline-block;
    width: 120px;
    height: 45px:
    line-height: 48px;
    background: #ffffff;
    color: ${color};
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms linear;
    border: 1px solid ${color};

    ${props => 
        props.primary 
        ? `
            &:hover {
                background: ${color};
                border-color: #fffff;
                border: 1px solid #fff;
                color: #ffffff;
            }
        ` 
        : `
            color: #838383; 
            background-color: #ccc;
        `};
`;