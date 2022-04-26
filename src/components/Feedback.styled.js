import style from 'styled-components';

export const Options = style.button`
margin: 5px;
padding:5px;
font-size: 20px;
border:none;
cursor:pointer;
border-radius:10px;
background-color: #ffffgg;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
:hover {
    transform: scale(1.1);
}
`;
