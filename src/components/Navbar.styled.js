import styled from 'styled-components';

export const Tooltip = styled.div`
  position: relative; /* making the .tooltip span a container for the tooltip text */
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
  cursor: pointer;

  &:before {
    content: "${({content}) => content}"; /* here's the magic */
    position: absolute;

    /* vertically center */
    top: 225%;
    transform: translateY(-50%);

    /* move to right */
    left: 0%;
    margin-left: -15px; /* and add a small left margin */

    /* basic styles */
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background: #000;
    color: #fff;
    text-align: center;

    display: none; /* hide by default */
  }

  &:hover:before {
    display: block;
  }

  .left:before {
    /* reset defaults */
    left: initial;
    margin: initial;

    /* set new values */
    right: 100%;
    margin-right: 15px;
  }
  &:after {
    content: "";
    position:absolute;

    /* position tooltip correctly */
    left:50%;
    margin-left:-5px;

    /* vertically center */
    top:100%;
    transform:translateY(-50%);

    /* the arrow */
    border:10px solid #000;
    border-color: transparent transparent black transparent;

    display:none;
  }
  &:hover:before,&:hover:after {
    display:block;
  }
`;